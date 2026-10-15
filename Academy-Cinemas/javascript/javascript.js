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