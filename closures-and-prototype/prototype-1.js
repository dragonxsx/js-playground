//Exercise - extend the functionality of a built in object

//#1
//Date object => to have new method .lastYear() which shows you last year 'YYYY' format.
// new Date('1900-10-10').lastYear()
//'1899'

//#Bonus
// Mofify .map() to print '🗺' at the end of each item.
// console.log([1,2,3].map())
//1🗺, 2🗺, 3🗺

Date.prototype.lastYear = function () {
    return this.getFullYear() - 1;
}

const lastYear = new Date('1900-10-10').lastYear();
console.log(lastYear);

Array.prototype.map = function() {    
    let arr = [];
    for(let item of this) {
        arr.push(item + '🗺');
    }
    return arr;
}
console.log([1,2,3].map());
console.log([1,2,3].map(item => item + 1));
