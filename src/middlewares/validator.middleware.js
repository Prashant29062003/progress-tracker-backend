import { validationResult } from "express-validator";
import { ApiResponse } from "../utils/api.response.mjs";
import { HTTP_STATUS } from "../constants.mjs";

export const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return ApiResponse.error(
      res,
      { errors: errors.array() },
      HTTP_STATUS.BAD_REQUEST
    );
  }
  next();
};
