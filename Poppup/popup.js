window.addEventListener("scroll", function () {
    let popup = document.getElementById("subscribePopup");
    if (window.scrollY > 10) { // Show after scrolling 200px
        popup.classList.add("show");
    }
});

function closePopup() {
    document.getElementById("subscribePopup").classList.remove("show");
}

function subscribe() {
    let email = document.getElementById("email").value;
    if (email) {
        alert("Thank you for subscribing!");
        closePopup();
    } else {
        alert("Please enter a valid email.");
    }
}
