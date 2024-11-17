import progressService from "../services/progress.service.mjs";
import chartService from "../services/chart.service.mjs";
import { ApiResponse } from "../utils/api.response.mjs";

class ChartController {
  async generateChart(req, res) {
    try {
      const timeData = await progressService.getTimeSpentByTopic(req.query);
      const chartData = {
        topics: timeData.map((item) => item.topic),
        timeSpent: timeData.map((item) => item.timeSpent),
      };

      const result = await chartService.generateAndUploadChart(chartData);
      return ApiResponse.success(res, { url: result.secure_url });
    } catch (error) {
      return ApiResponse.error(res, error.message);
    }
  }
}

export default new ChartController();
