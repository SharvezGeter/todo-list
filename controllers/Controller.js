
//const { router } = require('../app')
const tasks = require('../models/Task')

/*

1. Create Task
2. Update Task (Mark as Completed/ Uncompleted)
3. Delete Task 
4. Delete Multipl Tasks 
5. Create Muliple Tasks
6. Display all Tasks 

*/


// Display all tasks
async function displayAllTasks(req, res) {


    try {
      const allTasks = await tasks.find({});
    } catch (error) {
        console.log(error);
    }
    res.json({
        success: true,
        allTasks: allTasks
    })
    return 
}

//CreateTask
async function createTasks(req, res, next){
    try{
        //parse out fields from Post request
    const name  = req.body.name
    const description = req.body.description
    //const completed = req.body.completed
    // const dateCreated = req.body.dateCreated
    // const status =req.body.status
        //pass fields to new Blog model
    const newTask = new List({
        name,
        description,
        completed,
        dateCreated,
        status
    })
    //save our new entry to the database
    const savedData = await newTask.save();
//return the succesful request to the user
    res.json({
        success: true,
        tasks: savedData
    })
    }catch(e) {
        console.log(typeof e)
        console.log(e)
        res.json({
            error: e.toString(),
        })
    }
}

//Update Tasks

async function updateTasks(req,res){
    const taskToUpdate.title = req.params.title;

    try {
        await tasks.updateOne({ id: entryId }, req.body);
    } catch (err) {
        console.log(err);
        throw err;  
    }
    res.json({
        success: true,
        message: `blog entry id ${entryId} updated`
    })
}


//Delete Multi
async function deleteMultipleTasks(req, res) {
    try {
      const idsToDelete = req.body
      if (idsToDelete.length < 1){
        throw Error("ids to delete empty!");
      }
      const deleteResult = await db().collection("toDoList").deleteMany({
        id: {
          $in: idsToDelete
        }
      })
  } catch (e) {
    res.send(e);
  }
    res.json({
        success: true,
        deleteResult: deleteResult
    })
}
//
//Delete One
async function deleteOneTask(req, res) {
    try {
      const idsToDelete = req.body
      if (idsToDelete.length < 1){
        throw Error("id to delete empty!");
      }
      const deleteResult = await db().collection("toDoList").deleteMany({
        id: {
          $in: idsToDelete
        }
      })
  } catch (e) {
    res.send(e);
  }
    res.json({
        success: true,
        deleteResult: deleteResult
    })
}













module.exports = 
{ 
    displayAllTasks,
    createTasks,
    updateTasks,
    deleteMultipleTasks,
    deleteOneTask
}