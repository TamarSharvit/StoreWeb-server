var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UserController.js');




// router.get("/login/:email/:password",usersController.login);

// router.post("/signup", usersController.post);

module.exports = router;
/*
 * GET
 */
router.get('/', UserController.list);

/*
 * GET
 */
router.get('/:id', UserController.show);
//////////////////////////////////
router.get('/:email/:password', UserController.showByEmailPassword);


/*
 * POST
 */
router.post('/', UserController.create);

/*
 * PUT
 */
router.put('/:id', UserController.update);

/*
 * DELETE
 */
router.delete('/:id', UserController.remove);

module.exports = router;
