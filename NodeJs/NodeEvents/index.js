const EventEmitter = require('events');

const event = new EventEmitter();


// example event registering for the event to be fired only one timeusing once.
// event.on('sayMyName', ()=>{
//     console.log('got your name: Pravin');
// })
// event.emit('sayMyName');

// example event registering for the event to be fired during couple of callback.

// event.on('sayMyName', ()=>{
//     console.log('got your name: Pravin');
// });

// event.on('sayMyName', ()=>{
//     console.log('got your last name: Maurya');
// });

// event.on('sayMyName', ()=>{
//     console.log('got your middle name: Kumar');
// });
// event.emit('sayMyName');


// example  registering for the events with callback function.
// event.on('sayMyName', ()=>{
//     console.log('got your middle name: Kumar');
// });
event.on('sayMyName', (sc, msg)=>{
    console.log(`the status code is ${sc} and sc is ${msg}` );
});
event.emit('sayMyName', 200, 'ok');

