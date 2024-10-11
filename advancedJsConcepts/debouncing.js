// Debouncing is a programming practice used to limit the number of times a function is executed.
// It ensures that a function is only called after a certain amount of time has passed since it was last invoked.
// This is especially useful when dealing with events like resizing the window, scrolling, or typing in a search bar,
// where frequent triggering can cause performance issues.

function debouncing(fn, delay){
    let timer;
    return function(...args){
        clearTimeout(timer)
        timer = setTimeout(() => fn(...args), delay)
    }
}

const apiCall = (...args) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => console.log(`API Response ${args}`), 2000) // 'API Response 9'
    })
}

let handleApiCallWithDebounce = debouncing(apiCall, 1000)

for(let i=0; i<10; i++){
    handleApiCallWithDebounce(i)
}