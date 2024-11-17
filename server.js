import "dotenv/config";
import logger from "./src/utils/logger.mjs";
import app from "./src/app.mjs";
import connectDB from "./src/db/connection.mjs";

const PORT = process.env.PORT || 5000;

process.on("uncaughtException", (error) => {
  logger.error("Uncaught Exception:", error);
  process.exit(1);
});

process.on("unhandledRejection", (error) => {
  logger.error("Unhandled Rejection:", error);
  process.exit(1);
});

const startServer = async () => {
  try {
    // Connect to MongoDB
    await connectDB();

    // Start Express server
    const server = app.listen(PORT, () => {
      logger.info(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
      );
    });

    // Handle server shutdown
    const shutdown = async () => {
      logger.info("Shutting down server...");
      server.close(() => {
        logger.info("Server closed");
        process.exit(0);
      });

      // Force close after 10s
      setTimeout(() => {
        logger.error(
          "Could not close connections in time, forcefully shutting down"
        );
        process.exit(1);
      }, 10000);
    };

    process.on("SIGTERM", shutdown);
    process.on("SIGINT", shutdown);
  } catch (error) {
    logger.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
