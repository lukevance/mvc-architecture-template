'use strict';

const userModel = require('../user/user.model');

function login (req, res, next){
  // create a JWT or cookie
}

function logout (req, res, next) {
  // delete JWT or cookie
}

function isAuthenticated (req, res, next){
  // check/validate cookie/JWT
}

function isAuthorized (req, res, next) {
  let userId = req.session.jwtStuff.id;
  userModel.getById(userId)
  .then( (result) => {
    if(result.role === 'admin'){
      next();
    } else {
      unAuthRequest(req, res, next);
    }
  })
  .catch();
}

function unAuthRequest(req, res, next){
  res.status = 403;
  res.send('you cannot do that');
}

module.exports = {
  login,
  logout,
  isAuthenticated,
  isAuthorized
};
