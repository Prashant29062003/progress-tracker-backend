import logger from "../utils/logger.mjs";
import { ApiResponse } from "../utils/api.response.mjs";
import { HTTP_STATUS } from "../constants.mjs";

export const errorHandler = (err, req, res, next) => {
  logger.error(err.stack);

  return ApiResponse.error(
    res,
    "Something went wrong!",
    HTTP_STATUS.INTERNAL_SERVER
  );
};
