'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const postsEvents = require('./posts/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#post-create').on('submit', onCreatePost)
  $('#post-index').on('submit', onIndexPosts)
  // $('#post-show').on('submit', onShowPost)
  $('#post-delete').on('submit', onDeletePost)
  $('#post-update').on('submit', onUpdatePost)
})
