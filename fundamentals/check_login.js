let user = prompt("Who's there?", '');
if (user == 'Admin') {
    let password = prompt('please enter a password', '');
    if (password == 'TheMaster') {
        alert( 'Welcome!' );
    } else if (password == '' || password == null) {
        alert( 'Canceled' );
    } else {
        alert( 'Wrong password' );
    }
} else if (user == '' || user == null) {
    alert( 'Canceled' );
} else {
    alert( 'I don\'t know you' )
}