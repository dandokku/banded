import mongoose from "mongoose"

const postSchema = mongoose.Schema(
    {
        userID: {
            type: String,
            required: true, 
        }, 
    }
)
