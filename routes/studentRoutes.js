import { Router } from "express";
import { students, name } from "../database/usersArray.js";
import studentModel from "../database/studentModel.js"
import { faker } from '@faker-js/faker';
const router = new Router();

router.get('/', async (req, res) => {

    const students = await studentModel.find().lean();

    res.render("students", { name, students: students });
})

router.get('/update', (req, res) => {

})

router.get('/create', (req, res) => {
    const studentArray = [];
    for (let i = 0; i < 1000; i++) {
        studentArray.push({
            name: faker.person.firstName(),
            age: faker.date.birthdate()
        })
    }

    studentModel.create(studentArray)
    res.send('Done')
})
export default router;
