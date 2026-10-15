//Initialize Bootstrap popovers
//select every HTML element with data-bs-toggle="popover"
const popoverTriggerList =
document.querySelectorAll('[data-bs-toggle="popover"]');
//loop through each popover element
popoverTriggerList.forEach(function(element) {
    //retrieve the star rating image path from the HTML
    var imgSrc = element.getAttribute('data-bs-image');
    //create the HTML image displayed inside the popover
    var content = "<img src='" + imgSrc +
                    "' class='star-rating' alt='Movie start rating'>";
    //create bootstrap popover for each movie poster
    new bootstrap.Popover(element, {
        content: content,
        html: true,
        trigger: 'hover'
    });
});

//Initialize Toast
var toastE1List = [].slice.call(document.querySelectorAll('.toast'));
var toastList = toastE1List.map(function(toastE1) {
    return new bootstrap.Toast(toastE1);
});

//Function to display toast with selected options
function displaySelectedMovieOptions() {
    //get the selected movie
    var movie = document.getElementById('movie-select').options[
        document.getElementById('movie-select').selectedIndex
    ].text;
    //get the selected showtime
    var time = document.getElementById('time-select').options[
        document.getElementById('time-select').selectedIndex
    ].text;
    //get the number of tickets
    var quantity = document.getElementById('quantity').value;
    //create the confirmation message
    var message = "Purchase confirmed for: " + movie +
                    "\nTime: " + time +
                    "\nTickets: " + quantity;
    //display toast
    var toastBody = document.getElementById('toast-body');
    toastBody.textContent = message;
    var toast = new bootstrap.Toast(
        document.getElementById('toast-display')
    );
    toast.show();
}

//Function called when Buy Tickets is clicked
function buyTickets() {
    displaySelectedMovieOptions();
}

//intialize bootstrap tooltips
const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
);
tooltipTriggerList.forEach(function(element) {
    new bootstrap.Tooltip(element);
});

//JQuery
//shrinks header size when the document is scrolled down by 80 pixels
$(document).on("scroll", function() {
    //when the webpage is scrolled down from the top by 50px this if statement will trigger
    if ($(document).scrollTop() > 50) {
        //once the 50px requirement has been met add the
        //nav shrink class selector to the same HTML element
        //that has the nav class
        $("nav").addClass("nav-shrink");
        //adjust the position of the mobile drop menu to accomodate new height decrease
        $("div.navbar-collapse").css("margin-top", "-6px");
    } else {
        //if the webpage has not been scrolled down or is back
        //at the top the nav-shrink class selector is removed
        //from the HTML element with the nav class selector
        $("nav").removeClass("nav-shrink");
        //the margin for the drop down menu is now returned to it's original amount
        $("div.navbar-collapse").css("margin-top", "14px");
    }
});

//close mobile menu when a navigation link is clicked
$(document).ready(function () {
    //on click when an element contains just the navlink class and not the dropdown toggleand then also close when an element with the class .dropdown-item has been clicked
    $(".navbar-nav").on('click', 'nav-link:not(".dropdown-toggle"), .dropdown-item', function() {
        //collapse the navbar when a link or dropdown item is clicked
        $(".navbar-collapse").collapse('hide');
    });
});