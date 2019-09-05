import express from "express";

const Example = express.Router();

Example.get("/example", (req, res, next) => {
  res.send({
    message:
      "This is an example route, change this route for your personal needs."
  });
});

export default Example;
