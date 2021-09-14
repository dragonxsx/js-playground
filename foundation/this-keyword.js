const a = function () {
    console.log('a', this);

    const b = function() {
        console.log('b', this);

        const c  = {
            hi: function() {
                console.log('c', this)
            }
        };

        c.hi();
    }

    b();
}

a();

// a: global/window
// b: global/window
// c: object c

const obj = {
    name: 'Billy',
    sing() {
        console.log('a', this);

        var anotherFunc = function() {
            console.log('b', this);
        }

        var anotherFunc1 = () => {
            console.log('c', this);
        }

        anotherFunc();
        anotherFunc1();
    }
}

obj.sing();

// a: object obj
// b: global/window
// c: object obj