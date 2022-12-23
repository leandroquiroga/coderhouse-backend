const { schema } = require('normalizr');
const utils = require('util');

const authorSchema = new schema.Entity('author');
const messageSchema = new schema.Entity('messages');

const userSchema = new schema.Entity('user', {
  author: authorSchema,
});
const postSchema = new schema.Entity('post', {  
  post: [userSchema],
});

const textSchema = new schema.Entity('text', {
  text: [messageSchema]
});

module.exports = {
  postSchema,
  textSchema
};