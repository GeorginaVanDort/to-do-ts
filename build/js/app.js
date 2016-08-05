(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "1058a1624bc04975fc3d59ecad0d21584bb807b5";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

// exports.getRepos = function(){
//   $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
//     console.log(response);
//   }).fail(function(error){
//     console.log(error.responseJSON.message);
//   });
// };

$(document).ready(function(){
  $('#user-lookup').submit(function(event){
    event.preventDefault();
    userName = $('#user-name').val();
    $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
      console.log(response);
        }).fail(function(error){
          console.log(error.responseJSON.message);
        });
  });
});

},{"./../.env":1}]},{},[2]);
