/*
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
*/
let login = prompt('id?','');

let message = (login == 'Employee') ? alert('Hello') : 
  (login == 'Director') ? alert('Greetings') :
  (login == '') ? alert('No login') : 
  '';
