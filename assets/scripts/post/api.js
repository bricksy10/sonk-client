'use strict'

const config = require('../config')
const store = require('../store')

const createPost = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/post',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
    // data: data
  })
}

const indexPost = function () {
  return $.ajax({
    url: config.apiUrl + '/post',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showPost = function (post) {
  return $.ajax({
    url: config.apiUrl + '/post/' + post.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deletePost = function (id) {
  return $.ajax({
    url: config.apiUrl + '/post/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updatePost = function (data) {
  return $.ajax({
    url: config.apiUrl + '/post/' + data.post.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
    // data: data
  })
}

module.exports = {
  createPost,
  indexPost,
  showPost,
  deletePost,
  updatePost
}
