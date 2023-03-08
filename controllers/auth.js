const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const User = require('../models/User')

const JWTStrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt

