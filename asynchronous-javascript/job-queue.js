// Callback Queue - Task Queue
setTimeout(() => {console.log('1', ' is the lonlinest number')}, 0);
setTimeout(() => {console.log('2', ' can be as bad as one')}, 10);

// Job Queue - Microtask Queue
Promise.resolve('hi').then(data => console.log('2', data));

console.log('3', 'is a crowd');