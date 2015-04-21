$(document).click(function(e) {
  e.preventDefault();
  var rvalue = Math.floor(Math.random() * 256);
  var gvalue = Math.floor(Math.random() * 256);
  var bvalue = Math.floor(Math.random() * 256);
  rvalue = rvalue.toString();
  gvalue = gvalue.toString();
  bvalue = bvalue.toString();
  var randomColor = 'rgb(' + rvalue + ',' + gvalue + ',' + bvalue + ')';
  $('body').css('background-color',randomColor);
});