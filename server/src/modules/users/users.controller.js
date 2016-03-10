'use strict';

const userModel = require('./users.model');
const userValidation = require('./user.validation');


function getAll (req, res, next) {
  userModel.getAll()
  .then( (result) => {
    res.send(result);
  })
  .catch( (err) => {
    next(err);
  });
}

function getById (req, res, next) {
  let userId = req.params.id;
  userModel.get(userId)
  .then( (result) => {
    res.send(result);
  })
  .catch( (err) => {
    next(err);
  });
}

function update (req, res, next) {
  let userId = req.params.id;
  userModel.update(userId)
  .then( (result) => {
    res.send(result);
  })
  .catch( (err) => {
    next(err);
  });
}

function create (req, res, next) {
  let user = {
    username: req.body.id,
    email: req.body.email
  };
  // validations
  let errs = userValidation.validate(user);

  if (errs.length === 0){
    let password = req.body.password;
    // hash password
    password = hashPassword(password);


    userModel.create(userId)
    .then( (result) => {
      res.send(result);
    })
    .catch( (err) => {
      next(err);
    });
  } else {
    res.send(errs);
  }

}

function deleteOne (req, res, next) {
  let userId = req.params.id;

  userModel.create(userId)
  .then( (result) => {
    res.send(result);
  })
  .catch( (err) => {
    next(err);
  });
}

function hashPassword(password){
  return password;
}



module.exports = {
  getAll,
  getById,
  create,
  update,
  delete
}
