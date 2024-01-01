import express from "express";
import { Question } from "../models/questionModel.js";

const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const questions = await Question.find({})
        return res.status(200).json(questions)
    }
    catch(err) {
        console.log(err)
        res.status(500).send({message: err.message})
    }
})

router.get('/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const question = await Question.findById(id);
        return res.status(200).json(question)
    }
    catch(err) {
        console.log(err)
        res.status(500).send({message: err.message})
    }
})

router.post('/', async(req, res) => {
    try {
        const newQuestions = req.body;
        const question = await Question.insertMany(newQuestions);
        return res.status(200).json(question)
    }
    catch(err) {
        console.log(err)
        res.status(500).send({message: err.message})
    }
})

export default router;