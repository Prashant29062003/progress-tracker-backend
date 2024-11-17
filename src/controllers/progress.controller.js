import progressService from "../services/progress.service.mjs";
import { ApiResponse } from "../utils/api.response.mjs";
import { HTTP_STATUS } from "../constants.mjs";

class ProgressController {
  async createLog(req, res) {
    try {
      const log = await progressService.createLog(req.body);
      return ApiResponse.success(res, log, HTTP_STATUS.CREATED);
    } catch (error) {
      return ApiResponse.error(res, error.message);
    }
  }

  async getLogs(req, res) {
    try {
      const logs = await progressService.getAllLogs(req.query);
      return ApiResponse.success(res, logs);
    } catch (error) {
      return ApiResponse.error(res, error.message);
    }
  }
}

export default new ProgressController();
