
const { v4: uuidv4 } = require("uuid");
const express = require("express");
const router = express.Router();



const routeController = require("../controllers/Controller")
/*
GET access routes
*/
router.get('/task/all',routeController.displayAllTasks); 
router.post("/task/create-one", routeController.createTasks);
router.get("/task/updateTask/:id", routeController.updateTasks);
router.delete("/task/delete-one/:id", routeController.deleteOneTask)
router.delete("/task/delete-multiple/:id", routeController.deleteMultipleTasks)
router.delete("/task/create-multiple/:id", routeController.createMultipleTasks)



module.exports = router;