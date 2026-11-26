// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", function () {

    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }

});

// CLOSE MENU AFTER CLICKING A LINK

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navbar.classList.remove("active");
        menuToggle.textContent = "☰";

    });

});

// APPOINTMENT FORM

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("customerName").value;
    const phone = document.getElementById("customerPhone").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    const whatsappNumber = "27838833705";

    const whatsappMessage =
        "Hello Euny's Life Beauty!" +
        "\n\nI would like to enquire about an appointment." +
        "\n\nName: " + name +
        "\nPhone: " + phone +
        "\nService: " + service +
        "\nMessage: " + message;

    const whatsappURL =
        "https://wa.me/" + whatsappNumber +
        "?text=" + encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");

});