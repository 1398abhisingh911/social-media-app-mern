const router = require("express").Router();
const Message = require("../models/Message");
const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    conversationId: {
      type: String
    },
    sender: {
      type: String
    },
    text: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", MessageSchema);
