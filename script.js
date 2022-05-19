document.addEventListener('DOMContentLoaded', (e)=>{ // adds an event listener that returns when all DOM elements are loaded, used for fade out for the splash screen
    setTimeout(()=>{ // function to return after 5 seconds
        document.querySelector(".splash").classList.add('display-none'); // adds the display-none class to the splash div to fade out
    }, 5000)
})