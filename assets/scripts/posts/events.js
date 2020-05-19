'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onCreatePost = function (event) {
  event.preventDefault()
  console.log('onCreatePost ran!')

  const data = getFormFields(event.target)
  api.create(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onIndexPosts = function (event) {
  event.preventDefault()
  console.log('onIndexPosts ran!')

  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onShowPost = function (event) {
  event.preventDefault()
  console.log('onShowPost ran!')

  const data = getFormFields(event.target)
  const post = data.post

  if (post.id.length !== 0) {
    api.show(post)
      .then(ui.onShowSuccess)
      .catch(ui.onShowFailure)
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
    api.destroy(post.id)
      .then(ui.onDeleteSuccess)
      .catch(ui.onDeleteFailure)
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
    api.update(data)
      .then(ui.onUpdateSuccess)
      .catch(ui.onUpdateFailure)
  } else {
    $('#message').html('<p>Please provide a post id!</p>')
    $('#message').css('background-color', 'red')
    console.log('Please provide a post id!')
  }
}

const addHandlers = () => {
  $('#post-create').on('submit', onCreatePost)
  $('#post-index').on('submit', onIndexPosts)
  // $('#post-show').on('submit', onShowPost)
  $('#post-delete').on('submit', onDeletePost)
  $('#post-update').on('submit', onUpdatePost)
}

module.exports = {
  addHandlers
}
