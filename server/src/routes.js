'use strict';

const router = require('express').Router();

const userRoutes = require('./user/users.routes');
const authRoutes = require('./modules/auth/auth.routes');

router.use('/user', userRoutes);
router.use('/auth', authRoutes);


module.exports = router;
