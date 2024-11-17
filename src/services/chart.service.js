import chartGenerator from "../utils/chart.generator.mjs";
import cloudinary from "../utils/cloudinary.mjs";
import { CLOUDINARY_CONFIG } from "../constants.mjs";
import logger from "../utils/logger.mjs";

class ChartService {
  async generateAndUploadChart(data) {
    try {
      const imageBuffer = await chartGenerator(data.topics, data.timeSpent);

      return await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          CLOUDINARY_CONFIG,
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        uploadStream.end(imageBuffer);
      });
    } catch (error) {
      logger.error("Error generating/uploading chart:", error);
      throw error;
    }
  }
}

export default new ChartService();
