const express = require("express");
const User = require("../models");
const usersRouter = express.Router();

usersRouter.get("/", async (req, res, next) => {
    try {
        const allUsers = await User.findAll();
        if(!allUsers) {
            throw new Error("No users to be found");
        }
        res.json(allUsers);
    } catch (error) {
        next(error);
    }
})

usersRouter.get("/:id", async (req, res, next) => {
    try {
        const targetUser = await User.findByPk(req.params.id);
        if(!targetUser) {
            throw new Error("No users to be found");
        }
        res.json(targetUser);
    } catch (error) {
        next(error);
    }
})

