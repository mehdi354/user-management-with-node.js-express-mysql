const express = require('express');
const userController = require('../controllers/userController')

const router = express.Router();



router.get('/' , userController.view);
router.post('/' , userController.find)

router.get('/add-user' , userController.getNewUser);

router.post('/add-new-user' , userController.postNewUser)

router.get('/user/:id' , userController.viewSingleUser)

router.get('/user/:id/edit' , userController.edit)

router.post('/user/:id/edit' , userController.updateUser);

router.post('/user/:id/delete' , userController.delete);
// router.post('/' , (req,res) => {
//     console.log(process.env.DB_USER)
//     res.render('index')
// });

// router.get('/' , (req,res) => {
//     console.log(process.env.DB_USER)
//     res.render('index')
// });

// router.get('/' , (req,res) => {
//     console.log(process.env.DB_USER)
//     res.render('index')
// });

// router.get('/' , (req,res) => {
//     console.log(process.env.DB_USER)
//     res.render('index')
// });

module.exports = router;
