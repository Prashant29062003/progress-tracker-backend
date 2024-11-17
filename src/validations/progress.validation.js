import { body } from "express-validator";

export const validateProgressLog = () => [
  body("topic")
    .trim()
    .notEmpty()
    .withMessage("Topic is required")
    .isString()
    .withMessage("Topic must be a string"),

  body("timeSpent")
    .notEmpty()
    .withMessage("Time spent is required")
    .isFloat({ min: 0 })
    .withMessage("Time spent must be a positive number"),

  body("notes")
    .optional()
    .trim()
    .isString()
    .withMessage("Notes must be a string"),
];
