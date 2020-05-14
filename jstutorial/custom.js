$(document).ready(function(){
  /*
  alert("I am fully loaded");
  console.log("Hello World");

  var firstName = 'Jimmy';
  var lastName = 'Walsh';
  console.log('Hello '+firstName +' ' +lastName);
  firstName = 'Tom';
  console.log('Hello '+firstName);
  var is_an_excellent_teacher = false
  if(is_an_excellent_teacher == true){
    var firstName = 'Jimmy';
  }else{
    var firstName = 'Tom';
  }
  console.log('Hello '+firstName +' ' +lastName + ' you are an excellent teacher');*/
  var foods = ['pizza', 'pasta', 'chocolate', 'apples', 'grapes'];
    /*console.log(foods.length);
    console.log(foods[3]);*/
    for(var i = 0; i < foods.length; i = i + 1){
      /*console.log(foods[i]);*/
      $('#thingsILike').append('<li>' + foods[i] +'</li>')
    }

    /*$.each(foods, function(key,value){
      console.log(key + ' : ' + value);
    })*/
  /*$('#Tech').mouseover(function(){
    console.log('mouse is over tech');
    $(this).hide();
  })
  $('#Tech').mouseleave(function(){
    console.log('mouse has left tech');
    $(this).show();
  })
  $('#hidepicture').mouseover(function(){
    console.log("Hide button clicked");
    $('#Tech').hide();
  })
  $('#showpicture').mouseover(function(){
    console.log("show button clicked");
    $('#Tech').show();
  })*/
  $('#hidepicture').on('click',function(){
      $('#Tech').fadeOut();
  })
  $('#showpicture').on('click',function(){
      $('#Tech').fadeIn(3000);
  })
  $('#changeColor').on('click',function(){
    $('#thingsILike').fadeIn().css('background-color', 'red').css('color', 'blue');
    $('#firstheading').html(' Welcome to our Class')
  })

  $.ajax({
    url: 'https://randomuser.me/api/?results=50',
    dataType: 'json',
    success: function(data) {
      console.log(data);
      $.each(data.results, function(key,person){
        console.log(person.name.title +' ' +person.name.first +' ' +person.name.last);
        $('#users').append('<div class="col-md-2">'+person.name.title +' ' +person.name.first +' ' +person.name.last+'</div>')
      })
    }
  });
  var menu = 
});
