// Smooth Scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// // Scroll Animations
// window.addEventListener('scroll', function () {
//     let elements = document.querySelectorAll('.fade-in, .slide-up');
//     elements.forEach(el => {
//         let position = el.getBoundingClientRect().top;
//         let screenHeight = window.innerHeight;

//         if (position < screenHeight - 150) {
//             el.classList.add('visible');
//         }
//     });
// });
// let lastScrollTop = 0;
// window.addEventListener('scroll', function () {
//     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//     // Check if user scrolled past a certain point (50px in this case)
//     if (scrollTop > 50) {
//         document.body.classList.add('scrolled');
//         document.body.classList.remove('at-top');
//     } else {
//         document.body.classList.remove('scrolled');
//         document.body.classList.add('at-top');
//     }
// });

//------------------------------------------------Top NavBar---------------------------------------

var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    loader.style.display = "none";
})

//--------------------------------------------services--------------------------------------------


// Function to show service details
function showServiceDetails(serviceId) {
    // Hide all service detail items and show the selected one
    document.querySelectorAll('.service-item').forEach(detail => {
        detail.style.display = detail.id === serviceId ? 'block' : 'none';
    });
}

// Add event listeners to service list items and handle click
document.querySelectorAll('.services-list ul li a').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor click behavior
        showServiceDetails(item.getAttribute('href').substring(1)); // Show details for the selected service
    });
});

// Show the first service detail by default when the page loads
document.addEventListener('DOMContentLoaded', () => showServiceDetails('service1'));


//drop down
// Check URL hash and display corresponding service on page load
document.addEventListener('DOMContentLoaded', () => {
    const currentHash = window.location.hash.substring(1); // Get the hash without '#'
    if (currentHash) {
        showServiceDetails(currentHash); // Show the service matching the hash
    } else {
        showServiceDetails('service1'); // Default to the first service if no hash
    }
});

// Update service details dynamically when navigating back/forward
window.addEventListener('hashchange', () => {
    const newHash = window.location.hash.substring(1); // Get updated hash
    showServiceDetails(newHash); // Show service based on updated hash
});

// // Function to adjust scroll position after page load
// window.onload = function() {
//     const headerHeight = document.querySelector('header').offsetHeight; // Get header height
//     window.scrollTo(0, headerHeight); // Scroll to the position below the header
// };

// // Add event listeners to dropdown menu items
// document.querySelectorAll('.dropdown-menu a').forEach(item => {
//     item.addEventListener('click', (e) => {
//         const targetPage = item.getAttribute('href'); // Get the target page URL
//         // Redirect to the target page
//         window.location.href = targetPage;
//     });
// });
// -------------------------------------------contact page---------------------------------------

document.getElementById("contact-form").addEventListener("submit", function (event) {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const state = document.getElementById("state").value.trim();

    if (!name || !phone || !email || !state) {
        alert("Please fill out all fields.");
        event.preventDefault(); // Prevent form submission if validation fails
    } else {
        // You can add more complex validation logic here if needed
    }
});

//----------------------------------------responsice Header menu-------------------------------------

function toggleMenu() {
    const menuList = document.getElementById("menuList");
    menuList.classList.toggle("show");
}

//------------------------------------Responsive Service-----------------------------------------
function toggleDropdown() {
    var serviceList = document.querySelector('.services-list');

    // Check if the dropdown is expanded or collapsed and toggle accordingly
    if (serviceList.classList.contains('show-dropdown')) {
        serviceList.classList.remove('show-dropdown');
    } else {
        serviceList.classList.add('show-dropdown');
    }
}

function closeDropdown() {
    var serviceList = document.querySelector('.services-list');
    serviceList.classList.remove('show-dropdown');
}


//--------------------------------------- quick-connect ---------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const quickForm = document.querySelector(".quick-connect");
    const quickIcon = document.querySelector(".quick-icon");

    // Toggle form visibility on icon click
    quickIcon.addEventListener("click", function () {
      if (quickForm.classList.contains("hidden")) {
        quickForm.classList.remove("hidden"); // Show the form
        quickForm.style.transform = "translateX(0%)"; // Slide into view
      } else {
        quickForm.classList.add("hidden"); // Hide the form
        quickForm.style.transform = "translateX(100%)"; // Slide out of view
      }
    });
});





// ---------------------------


