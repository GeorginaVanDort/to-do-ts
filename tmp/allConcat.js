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
