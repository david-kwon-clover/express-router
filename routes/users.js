const express = require("express");
const { User } = require("../models/index.js");
const usersRouter = express.Router();

usersRouter.get("/", async (req, res, next) => {
  try {
    const allUsers = await User.findAll();
    if (!allUsers) {
      throw new Error("No users to be found");
    }
    res.json(allUsers);
  } catch (error) {
    next(error);
  }
});

usersRouter.get("/:id", async (req, res, next) => {
  try {
    const targetUser = await User.findByPk(req.params.id);
    if (!targetUser) {
      throw new Error("No users to be found");
    }
    res.json(targetUser);
  } catch (error) {
    next(error);
  }
});

usersRouter.post("/", async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});

usersRouter.put("/:id", async (req, res, next) => {
  try {
    const updatedUser = await User.update(req.body, { where: { id: req.params.id } });
    res.status(201).json(updatedUser)
  } catch (error) {
    next(error);
  }
});

module.exports = usersRouter;
