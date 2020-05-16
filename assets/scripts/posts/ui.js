'use strict'

const onCreateSuccess = function (data) {
  $('#message').text('Post successfully created')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('onCreateSuccess ran. Data is :', data)
}

const onCreateFailure = function (error) {
  $('#message').text('Error on creating post')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onCreateFailure ran. Error is :', error)
}

const onIndexSuccess = function (data) {
  $('#message').text('All posts successfully received')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('onIndexSuccess ran. Data is :', data.posts)
}

const onIndexFailure = function (error) {
  $('#message').text('Error on getting posts')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onIndexFailure ran. Error is :', error)
}

const onShowSuccess = function (data) {
  $('#message').text('One post successfully received')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('onCreateSuccess ran. Data is :', data)
}

const onShowFailure = function (error) {
  $('#message').text('Error on getting post')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onShowFailure ran. Error is :', error)
}

const onDestroySuccess = function () {
  $('#message').text('Post successfully deleted')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('Post successfully deleted')
}

const onDestroyFailure = function (error) {
  $('#message').text('Error on deleting post')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onDestroyFailure ran. Error is :', error)
}

const onUpdateSuccess = function () {
  $('#message').text('Post successfully updated')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('Post successfully updated')
}

const onUpdateFailure = function (error) {
  $('#message').text('Error on updating post')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onUpdateFailure ran. Error is :', error)
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onIndexSuccess,
  onIndexFailure,
  onShowSuccess,
  onShowFailure,
  onDestroySuccess,
  onDestroyFailure,
  onUpdateSuccess,
  onUpdateFailure
}
