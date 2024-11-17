import progressRepository from "../db/repositories/progress.repository.mjs";
import logger from "../utils/logger.mjs";

class ProgressService {
  async createLog(data) {
    try {
      return await progressRepository.create(data);
    } catch (error) {
      logger.error("Error creating progress log:", error);
      throw error;
    }
  }

  async getAllLogs(query) {
    try {
      return await progressRepository.findAll(query);
    } catch (error) {
      logger.error("Error fetching progress logs:", error);
      throw error;
    }
  }

  async getTimeSpentByTopic(query) {
    try {
      return await progressRepository.getTimeSpentByTopic(query);
    } catch (error) {
      logger.error("Error getting time spent by topic:", error);
      throw error;
    }
  }
}

export default new ProgressService();
