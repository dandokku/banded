import express from "express";
import {
    getUser,
    getUserFriends,
    addRemoveFriend,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// Read Route: Get user by ID
router.get("/:id", verifyToken, getUser);

// Read Route: Get user's friends
router.get("/:id/friends", verifyToken, getUserFriends);

// Update Route: Add/remove friend for a user
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;
