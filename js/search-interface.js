var getRepos = require('./../js/search.js').getRepos;
var apiKey = require('./../.env').apiKey;


$(document).ready(function(){
  $('#user-lookup').submit(function(event){
    event.preventDefault();
    userName = $('#user-name').val();
    getRepos(userName);




// $("#nextPage").attr("href", 'https://api.github.com/users/' + userName + '/repos&page=2?access_token=' + apiKey);



  });
});
