var b = {
    name: 'jay',
    say() {
        console.log(this);
    }
}

var c = {
    name: 'jay',
    say() {
        return function() {
            console.log(this);
        }
    }
}

var d = {
    name: 'jay',
    say() {
        return () => console.log(this);
    }
}

b.say(); // object b
c.say()(); // global/window
d.say()(); // object d