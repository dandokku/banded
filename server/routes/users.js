import express from "express"
import {
    getUser,
    getUserFriends,
    addRemoveFriend,
} from "../controllers/users"  //* I am importing these functions from the users controllers
import { verifyToken } from "../controllers/auth"

const router = express.Router()

//? The Read Route
router.get("/:id", verifyToken, getUser)
router.get("/:id/friends", verifyToken, getUserFriends)
router.get("/:id/:friendId", verifyToken, addRemoveFriend)

export default router

