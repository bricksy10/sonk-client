'use strict'

const onCreatePostSuccess = function (data) {
  $('#message').text('Post successfully created')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('onCreateSuccess ran. Data is :', data)
  $('form').trigger('reset')
}

const onCreatePostFailure = function (error) {
  $('#message').text('Error on creating post. Error is :', error)
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onCreatePostFailure ran. Error is :', error)
  $('form').trigger('reset')
}

const onIndexPostSuccess = function (data) {
  $('#message').text('All posts successfully received')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('onIndexPostSuccess ran. Data is :', data.post)
  $('.authenticated').show()
  $('.unauthenticated').hide()
  $('form').trigger('reset')
}

const onIndexPostFailure = function (error) {
  $('#message').text('Error on getting posts')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onIndexPostFailure ran. Error is :', error)
  $('.authenticated').show()
  $('.unauthenticated').hide()
}

const onShowPostSuccess = function (data) {
  $('#message').text('One post successfully received')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('onCreatePostSuccess ran. Data is :', data)
  $('form').trigger('reset')
}

const onShowPostFailure = function (error) {
  $('#message').text('Error on getting post')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onShowPostFailure ran. Error is :', error)
  $('form').trigger('reset')
}

const onDeletePostSuccess = function (data) {
  $('#message').text('Post successfully deleted')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('Post successfully deleted')
  $('form').trigger('reset')
}

const onDeletePostFailure = function (error) {
  $('#message').text('Error on deleting post')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onDeletePostFailure ran. Error is :', error)
  $('form').trigger('reset')
}

const onUpdatePostSuccess = function (data) {
  $('#message').text('Post successfully updated')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('Post successfully updated')
  $('form').trigger('reset')
}

const onUpdatePostFailure = function (error) {
  $('#message').text('Error on updating post')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onUpdatePostFailure ran. Error is :', error)
  $('form').trigger('reset')
}

module.exports = {
  onCreatePostSuccess,
  onCreatePostFailure,
  onIndexPostSuccess,
  onIndexPostFailure,
  onShowPostSuccess,
  onShowPostFailure,
  onDeletePostSuccess,
  onDeletePostFailure,
  onUpdatePostSuccess,
  onUpdatePostFailure
}
