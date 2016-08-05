var apiKey = require('./../.env').apiKey;

exports.getRepos = function(userName){
  $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(info){
console.log(info);
    for (var i=0; i<info.length; i++){
      $('#repos').append('<p>' + info[i].name + '</p>');
    }
  });
};
