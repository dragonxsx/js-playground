let view;
function initialize() {
    let called = 0;

    return function() {
        if(called > 0) {
            return;
        }
        called++;
        view = 'VIEW';
        console.log('view has been set!');
    }
}

let callOnce = initialize();
callOnce();
callOnce();
callOnce();
console.log(view);