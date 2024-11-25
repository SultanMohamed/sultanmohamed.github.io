AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom" // defines which position of the element regarding to window should trigger the animation
});

// Select the form and the message placeholder
const form = document.querySelector("form");
const messageDiv = document.getElementById("form-message");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  // Gather form data
  const formData = new FormData(form);

  // Send the form data via fetch
  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      Accept: "application/json"
    }
  })
    .then(() => {
      // Display success message
      messageDiv.className = "alert alert-success";
      messageDiv.textContent = "Thank you! Your message has been sent.";
      form.reset(); // Reset the form fields
    })
    .catch(() => {
      // Display error message
      messageDiv.className = "alert alert-danger";
      messageDiv.textContent =
        "Oops! Something went wrong. Please try again later.";
    });
});
