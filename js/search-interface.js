$(document).ready(function(){
  $('#user-lookup').submit(function(event){
    event.preventDefault();
    var userName = $('#user-name').val();
    console.log(userName);
  });
});
