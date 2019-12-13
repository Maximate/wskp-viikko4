'use strict';
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const catController = require('../controllers/catController');
passport.authenticate('jwt', {session: false});

router.get('/', catController.cat_list_get);

router.get('/:id', catController.cat_get);

router.post('/',  upload.single('cat'), (req, res, next) => {
  console.log('cat post file', req.file);
  // tiedostonnimi bodyyn, jos haluaa
  // req.body.filename = req.file.filename; // if you want to save filename to body
  next();
});

router.post('/', catController.cat_create_post);

router.put('/', catController.cat_update_put);

router.delete('/:id', catController.cat_delete);

module.exports = router;
