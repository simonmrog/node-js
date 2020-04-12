"use strict";

const mongoose = require("mongoose");
const crypto = require("crypto");
const Schema = mongoose.Schema;

const services = require("../services");

const UserSchema = Schema({
  email: { type: String, unique: true, lowercase: true },
  displayName: String,
  avatar: String,
  password: { type: String },
  signupDate: { type: Date, default: Date.now() },
  lastLogin: Date
});

// using gravatar for user avatar
UserSchema.methods.gravatar = function () {
  if (!this.email) return `https://gravatar.com/avatar/?s=200&d=retro`;
  const md5 = crypto.createHash("md5").update(this.email).digest("hex");
  return `https://gravatar.com/avatar/${md5}/?s=200&d=retro`;
}

module.exports = mongoose.model("User", UserSchema);