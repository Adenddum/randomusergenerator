
var url = 'https://randomuser.me/api/';
var fullnameDisp = document.querySelector("#fullname");
var avatar = document.querySelector("#avatar");

var btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
   fetch(url)
   .then(function(res){
      return res.json();
   })
   .then(function(data){
     console.log(data);
     var fullname = data.results[0].name.first + " " + data.results[0].name.last;
     fullnameDisp.innerText = fullname;
     avatar.src = data.results[0].picture.medium;
   })
   .catch(function(err){
     console.log(err);  
   });
});