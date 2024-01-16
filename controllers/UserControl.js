

const User = require("../modules/User");



/************************** Register & Login ************************ */

// const Register = async (_username, _password,_firstName) => {
//     try {
//         let data = await User.create({ username: _username, password: _password,firstName:_firstName });
//         if (data) {
//             console.log("Regester is Done ")
//         }
//         else {
//             console.log("error");
//         }
//     }
//     catch (e) {
//         console.log(e);
//     }

// }


// const Login = (_username, _password,_firstName) => {
//     try {
//         let data = User.find({ username: _username, password: _password,firstName:_firstName});
//         if (data) {
//             console.log("Welcome in website");
//         }
//     }
//     catch (e) {
//         console.log(e);
//     }


// }

/********************************************************************************************* */
// -----------------------------GET ALL USERS------------------------------------------------

const getAllUsers = async () => {
    try {
        let data = await User.find({});
        if (data) {
            console.log(`Users`, data)
        }
        else {
            console.log("error");
        }
    }
    catch (e) {
        console.log(e);
    }

}

/********************************************************************************************* */
// ------------------------- GET FIRSTNAME FROM USERS---------------------------------------

const getUsers = async () => {
    try {
        let data = await User.find({},{firstName:1, _id:0});
        if (data) {
            console.log(`Users`, data)
        }
        else {
            console.log("error");
        }
    }
    catch (e) {
        console.log(e);
    }

}



/********************************************************************************************* */
// -------------------------------Delet User-----------------------------------------------------

const deletUser = async () => {
    try {
        let data = await User.deleteOne({username:'Hossa'});
        if (data) {
            console.log(`Users`, data)
        }
        else {
            console.log("error");
        }
    }
    catch (e) {
        console.log(e);
    }

}



/********************************************************************************************* */
// ------------------------------------Edit User-------------------------------------------------

const editUser = async () => {
    try {
        let data = await User.findOneAndUpdate({username:'mohamed'},{username:'moSalah'});
        if (data) {
            console.log('Users', data)
        }
        else {
            console.log("error");
        }
    }
    catch (e) {
        console.log(e);
    }

}


/*************----Exports----************ */


// module.exports = { Register, Login };
// module.exports = {getUsers};
// module.exports = {getAllUsers};
// module.exports = {deletUser};
// module.exports = {editUser};
