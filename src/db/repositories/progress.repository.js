import ProgressLog from "../../models/progress.model.mjs";

class ProgressRepository {
  async create(data) {
    return await ProgressLog.create(data);
  }

  async findAll(query = {}) {
    return await ProgressLog.find(query).sort("-createdAt");
  }

  async getTimeSpentByTopic(query = {}) {
    return await ProgressLog.aggregate([
      { $match: query },
      {
        $group: {
          _id: "$topic",
          totalTime: { $sum: "$timeSpent" },
        },
      },
      {
        $project: {
          topic: "$_id",
          timeSpent: "$totalTime",
          _id: 0,
        },
      },
    ]);
  }
}

export default new ProgressRepository();
