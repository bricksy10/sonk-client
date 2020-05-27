'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const postEvents = require('./post/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#post-create').on('submit', postEvents.onCreatePost)
  $('#post-index').on('submit', postEvents.onIndexPosts)
  $('#post-show').on('submit', postEvents.onShowPost)
  $('#post-delete').on('submit', postEvents.onDeletePost)
  $('#post-update').on('submit', postEvents.onUpdatePost)
})
