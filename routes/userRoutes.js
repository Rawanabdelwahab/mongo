import { Router } from "express";
const router = new Router();
router.get('/', (req, res) => {
    res.render("users");
})
router.get('/update', (req, res) => {

})

router.get('/create', (req, res) => {

})
export default router;