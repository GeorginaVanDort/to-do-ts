(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "1058a1624bc04975fc3d59ecad0d21584bb807b5";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

exports.getRepos = function(userName){
  $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(info){

    $('#profileInfo').text('');
    $('#profileInfo').append("<img src='"+info[0].owner.avatar_url+"'/><p>"
    +info[0].owner.login+"</p><a href='https://github.com/"
    +info[0].owner.login+"'>View on GitHub</a>");

    function UserRepo(repoName, repoDescription, repoLink) {
      this.name = repoName;
      this.descrip = repoDescription;
      this.repoLink = repoLink;
    }

    $('#repos').text('');
    var profile = [];
    for (var i=0; i<info.length; i++){
      var repo = new UserRepo(info[i].name, info[i].description, info[i].html_url);
      profile.push(repo);
      $('#repos').append("<article id='repos"+[i]+"'></article>"),
      $('#repos'+[i]).append('<a href='+ profile[i].repoLink + '>'+ profile[i].name +'</a>'),
      $('#repos'+[i]).append('<p>'+ profile[i].descrip +'</p>');
    }


  });
};

// exports.getRepos = function(userName, textStatus, xhr)
// header

},{"./../.env":1}],3:[function(require,module,exports){
var getRepos = require('./../js/search.js').getRepos;
var apiKey = require('./../.env').apiKey;


$(document).ready(function(){
  $('#user-lookup').submit(function(event){
    event.preventDefault();
    userName = $('#user-name').val();
    $('#user-name').val('');
    getRepos(userName);
    $('#repos').css("visibility", "visible");



  });
});

},{"./../.env":1,"./../js/search.js":2}]},{},[3]);
