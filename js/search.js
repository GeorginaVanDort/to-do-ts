var apiKey = require('./../.env').apiKey;

exports.getRepos = function(userName){
  $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(info){
// console.log(info);

    function UserRepo(repoName, repoDescription) {
      this.name = repoName;
      this.descrip = repoDescription;
    }

    var profile = [];
    for (var i=0; i<info.length; i++){
      var repo = new UserRepo(info[i].name, info[i].description);
      profile.push(repo);
    }

    for (var i = 0; i < profile.length; i++) {
      $('#repos').append('<p>'+ profile[i].name +'</p>'),
      $('#description').append('<p>'+ profile[i].descrip +'</p>');
    }





  });
};



// $("#nextPage").attr("href", 'https://api.github.com/users/' + userName + '/repos?access_token='+"&page=2" + apiKey);
// $('nextPage').click(function(){
//   for (var i = 3; i < number of pages; i++) {
//     $("#nextPage").attr("href", "https://api.github.com/search/code?q=addClass+user%3Amozilla&page="+i);
//
//   }


//
//   getRepos(userName, pageNumber)
// });
