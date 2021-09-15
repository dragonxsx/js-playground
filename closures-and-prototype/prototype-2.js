// How would you be able to create your own .bind() method using call or apply.

// Hint:

//     Function.prototype.bind = function(){
//     }

Function.prototype.bind = function(parent) {
    const self = this;
    return function(){
        return self.apply(parent, arguments);
    }
}