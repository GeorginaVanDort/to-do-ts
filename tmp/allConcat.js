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
