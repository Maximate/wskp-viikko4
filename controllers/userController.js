'use strict';
const userModel = require('../models/userModel');

const user_list_get = async (req, res) => {
  const users = await userModel.getAllUsers();
  await res.json(users);
};

const user_get = async (req, res) => {
  const user = await userModel.getUser(req.params.id);
  await res.json(user[0]);
};

const user_create_post = async (req, res) => {
  const params = [
    req.body.name,
    req.body.email,
    req.body.passwd,
  ];
  const result = await userModel.addUser(params);
  await res.json(result);
};

module.exports = {
  user_list_get,
  user_get,
  user_create_post,
};
