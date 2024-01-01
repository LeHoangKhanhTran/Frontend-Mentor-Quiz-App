import express from "express"
import { Topic } from "../models/topicModel.js";

const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const topics = await Topic.find({})
        return res.status(200).json(topics);
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send({message: err.message})
    }
})

router.post('/', async(req, res) => {
    try {
        const newTopic = {
            name: req.body.name,
        }
        const topic = await Topic.create(newTopic)
        return res.status(200).json(topic)
    }
    catch(err) {
        console.log(err)
        res.status(500).send({message: err.message})
    }

})

router.get('/:name', async(req, res) => {
    try {
        const { name } = req.params;
        const topic = await Topic.find({name: name});
        return res.status(200).json(topic);
    }
    catch(err) {
        console.log(err)
        res.status(500).send({message: err.message})
    }
})

router.post('/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const questionsIds = req.body.questionsIds;
        const topic = await Topic.findByIdAndUpdate(id, {
            "$push": { "questionsIds": questionsIds}
        })
        return res.status(200).json(topic)
    }
    catch(err) {
        console.log(err)
        res.status(500).send({message: err.message})
    }
})

export default router;