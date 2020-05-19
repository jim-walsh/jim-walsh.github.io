$.ajax({
  url: 'https://randomuser.me/api/?results=20',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    $.each(data.results, function(key, person){
      console.log(person.picture.thumbnail + ' ' + person.name.first + ' ' + person.name.last);
      $('#users').append('<div class="text-center col-md-2 '+ person.gender +'">' + '<img src="'+ person.picture.large +'" class="img-fluid rounded-circle">' + person.name.first + ' ' + person.name.last + '<div class="text-center"><span class="flag-icon flag-icon-'+ person.nat.toLowerCase() +'"></span></div>' + '<div class="text-center"><i class="fab fa-twitter-square"></i><i class="fab fa-facebook-square"></i><i class="fab fa-github-square"></i></div> ' + '</div>');
    })
  }
});
