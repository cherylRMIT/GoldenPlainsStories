// splash screen - needed individual javascript because it's the only page that needs to have a timeout to redirect to another page
document.addEventListener('DOMContentLoaded', (e)=>{ // adds an event listener that returns when all DOM elements are loaded, used for fade out for the splash screen
    setTimeout(()=>{ // function to return after 5 seconds
      window.location.href = './goldenplains.html'; // redirects window to goldenplains.html after 5 seconds
    }, 3000)
  });