const express = require('express');
const router = express.Router();
router.get('/register', (req, res) => {
    res.render('register');
});




// /*  http://localhost:3000/user/test   */

// router.get('/test', (req, res) =>{
//     res.send("hello user this is test route")
// })
// /* http://localhost:3000/user/index */
// router.get('/index', (req, res) =>{
//     res.render('new_index');
// })

module.exports = router;