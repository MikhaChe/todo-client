import mongoose from "mongoose";

const Post = new mongoose.Schema({
  urgency: {type: Boolean, required: true},
  check: {type: Boolean, required: true},
  selectMenu: {type: Boolean},
  body: {type: String, required: true},
  picture: {type: String}
})

export default mongoose.model('Post', Post);