import mongoose, { Schema } from "mongoose";

const topicSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        }, 
        questionsIds: [Schema.Types.ObjectId]
    }
)

export const Topic = mongoose.model('Topic', topicSchema, 'topics')