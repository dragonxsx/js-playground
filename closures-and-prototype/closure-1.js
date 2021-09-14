function callMeMaybe() {
    setTimeout(function() {
        console.log(callMe);
    }, 4000);

    let callMe = 'Hi! I am now here!';
}

callMeMaybe();