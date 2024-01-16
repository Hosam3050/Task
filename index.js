

const mongoose = require('mongoose');

const User = require('./modules/User');
const Todo = require('./modules/Todo');
const userController = require("./controllers/UserControl");
const todoController = require('./controllers/TodoControl');


mongoose.connect('mongodb://127.0.0.1:27017/DB').then(() => {
    console.log("connect Sucsess");
}).catch(err => {console.log(err);})


/****************************Creat User ***************************** */

// User.create({ username: "mohed",password:"mohamedamr01157",firstName:"mohamed", age: 30}).then(data => {
//     console.log(data);
// })



/**********************Todo Creat & Edit & Delet*************************** */


// todoController.createTodo('Java Script','Paid',"65a67e1555a22b97e18fa6e2").then(data => {
//     console.log(data);
// })

// todoController.editTode("65a6b550a8da1361f7e6aa63","PHP-laravel");



// todoController.deleteTodo("65a6b550a8da1361f7e6aa63");



/*************************Login & Register***************************** */

// userController.Register("Hossa", "hosas@g",'hosam');
// userController.Login("Hossa", "hosas@g",'hosam');


/************************Calling******************************/

// userController.getUsers()
// userController.getAllUsers()
// userController.deletUser()
// userController.editUser()









