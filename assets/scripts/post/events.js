'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onCreatePost = function (event) {
  event.preventDefault()
  console.log('onCreatePost ran!')

  const formData = getFormFields(event.target)

  api.createPost(formData)
    .then(api.indexPost)
    .then(ui.onCreatePostSuccess)
    .catch(console.error)
}

const onIndexPost = function (event) {
  event.preventDefault()
  console.log('onIndexPosts ran!')

  api.indexPost()
    .then(ui.onIndexPostSuccess)
    .catch(ui.onIndexPostFailure)
}

const onShowPost = function (event) {
  event.preventDefault()
  console.log('onShowPost ran!')

  const data = getFormFields(event.target)
  const post = data.post

  if (post.id.length !== 0) {
    api.showPost(post)
      .then(ui.onShowPostSuccess)
      .catch(ui.onShowPostFailure)
  } else {
    $('#message').html('<p>Please provide a post id!</p>')
    $('#message').css('background-color', 'red')
    console.log('Please enter an post id!')
  }
}

const onDeletePost = function (event) {
  event.preventDefault()
  console.log('onDeletePost ran!')

  const data = getFormFields(event.target)
  const post = data.post

  if (post.id.length !== 0) {
    api.deletePost(post.id)
      .then(ui.onDeletePostSuccess)
      .catch(ui.onDeletePostFailure)
  } else {
    $('#message').html('<p>Please provide a post id!</p>')
    $('#message').css('background-color', 'red')
    console.log('Please provide a post id!')
  }
}

const onUpdatePost = function (event) {
  event.preventDefault()
  console.log('onUpdatePost ran!')

  const data = getFormFields(event.target)
  const post = data.post

  if (post.text === '') {
    $('#message').html('<p>Text is required</p>')
    $('#message').css('background-color', 'red')
    console.log('Text is required!')
    return false
  }
  if (post.id.length !== 0) {
    api.updatePost(data)
      .then(ui.onUpdatePostSuccess)
      .catch(ui.onUpdatePostFailure)
  } else {
    $('#message').html('<p>Please provide a post id!</p>')
    $('#message').css('background-color', 'red')
    console.log('Please provide a post id!')
  }
}

module.exports = {
  onCreatePost,
  onIndexPost,
  onShowPost,
  onDeletePost,
  onUpdatePost
}
