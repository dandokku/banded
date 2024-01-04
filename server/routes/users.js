import express from "express"
import {
    getUser,
    getUserFriends,
    addRemoveFriend,
} from "../controllers/users.js"  //* I am importing these functions from the users controllers
import { verifyToken } from "../middleware/auth.js"

const router = express.Router()

//? The Read Route, this route represents the route that help to grab information
router.get("/:id", verifyToken, getUser) 
router.get("/:id/friends", verifyToken, getUserFriends)
router.get("/:id/:friendId", verifyToken, addRemoveFriend) //! Update Router

export default router

