// $.expr[':'].icontains = $.expr.createPseudo(function(text) {
//     return function(e) {
//         return $(e).text().toUpperCase().indexOf(text.toUpperCase()) >= 0;
//     };
// });

$('#submit-btn').click(function() {
  event.preventDefault()
  var city = $('#city-type').val().toLowerCase().trim().replace(/\s{2,}/g, ' ')
  console.log(city)
  if  (city === 'nyc' || city === 'new york' || city === 'new york city') {
    $('body').css('background-image', 'url(images/nyc.jpg)');
  } else if(city === 'san francisco' || city === 'sf' || city === 'bay area') {
    $('body').css('background-image', 'url(images/sf.jpg)')
  } else if (city === 'los angeles' || city === 'la' || city === 'lax') {
    $('body').css('background-image', 'url(images/la.jpg)')
  } else if (city === 'austin' || city === 'atx') {
    $('body').css('background-image', 'url(images/austin.jpg)')
  } else if (city === 'sydney' || city === 'syd') {
    $('body').css('background-image', 'url(images/sydney.jpg)')
    alert('fuck you')
  } else {
     $('body').css('background-image', 'url(images/citipix_skyline.jpg)')
  }
})


// else {
//   $('body').css('background-image', 'url(images/citipix_skyline.jpg)')
// }
// })
//
// $('#submit-btn').click(function() {
//   event.preventDefault()
//   var city = $('#city-type').val().toLowerCase()
//   if(city === 'San Francisco' || city === 'SF' || city === 'Bay Area') {
//     $('body').css('background-image', 'url(images/sf.jpg)')
//   }
// })
//
// $('#submit-btn').click(function() {
//   event.preventDefault()
//   var city = $('#city-type').val()
//   if(city === 'Los Angeles' || city === 'LA' || city === 'LAX') {
//     $('body').css('background-image', 'url(images/la.jpg)')
//   }
// })
//
// $('#submit-btn').click(function() {
//   event.preventDefault()
//   var city = $('#city-type').val()
//   if(city === 'Austin' || city === 'ATX') {
//     $('body').css('background-image', 'url(images/austin.jpg)')
//   }
// })
//
// $('#submit-btn').click(function() {
//   event.preventDefault()
//   var city = $('#city-type').val()
//   if(city === 'Sydney' || city === 'SYD') {
//     $('body').css('background-image', 'url(images/sydney.jpg)')
//     alert('fuck you')
//   }
// })
