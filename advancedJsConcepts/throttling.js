// Throttling is a programming technique used to ensure that a function is executed at regular intervals, regardless of how many
//  times an event is triggered. It restricts a function to be called only once in a given time frame,
//  even if the event triggering the function fires repeatedly.


function throttling(fn, limit){
    let throttle;
    return function(...args){
       if(!throttle){
         fn(args)
         throttle = setTimeout(() => {
            clearTimeout(throttle)
         }, limit)
       }
    }
}

let handleFnWithThrottling = throttling((args) => {
    console.log(`.......fn call ${args}`) // '.......fn call 0'
}, 1000)

for(let i=0; i<10; i++){
    handleFnWithThrottling(i)
}


