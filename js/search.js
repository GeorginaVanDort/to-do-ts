var apiKey = require('./../.env').apiKey;

exports.getRepos = function(userName){
  $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(info){

    function UserRepo(repoName, repoDescription, repoLink) {
      this.name = repoName;
      this.descrip = repoDescription;
      this.repoLink = repoLink;
    }

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
