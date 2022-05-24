document.addEventListener('DOMContentLoaded', (e)=>{ // adds an event listener that returns when all DOM elements are loaded, used for fade out for the splash screen
    setTimeout(()=>{ // function to return after 5 seconds
        document.querySelector(".splash").classList.add('display-none'); // adds the display-none class to the splash div to fade out
    }, 5000)
})

// navigation drop down menu
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

