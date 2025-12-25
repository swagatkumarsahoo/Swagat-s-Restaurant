$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });

  // Reservation Modal
  $("#reserve-btn").click(function() {
    $("#reservation-modal").fadeIn();
  });

  $(".close-modal").click(function() {
    $("#reservation-modal").fadeOut();
  });

  $(window).click(function(event) {
    if (event.target == $("#reservation-modal")[0]) {
      $("#reservation-modal").fadeOut();
    }
  });

  // Reservation Form Submission
  $("#reservation-form").submit(function(e) {
    e.preventDefault();
    // Simple validation
    var name = $("#reserve-name").val();
    var email = $("#reserve-email").val();
    var phone = $("#reserve-phone").val();
    var date = $("#reserve-date").val();
    var time = $("#reserve-time").val();
    var guests = $("#reserve-guests").val();

    if (name && email && phone && date && time && guests) {
      alert("Reservation submitted successfully! We'll contact you soon.");
      $("#reservation-modal").fadeOut();
      $("#reservation-form")[0].reset();
    } else {
      alert("Please fill in all required fields.");
    }
  });

  // Menu Filtering
  $(".filter-btn").click(function() {
    var filter = $(this).data("filter");
    $(".filter-btn").removeClass("active");
    $(this).addClass("active");

    if (filter === "all") {
      $(".food-menu-item").show();
    } else {
      $(".food-menu-item").hide();
      $(".food-menu-item." + filter).show();
    }
  });

  // Contact Form Validation
  $("#contact-form").submit(function(e) {
    e.preventDefault();
    var name = $(this).find('input[type="text"]').val();
    var email = $(this).find('input[type="email"]').val();
    var message = $(this).find('textarea').val();

    if (name && email && message) {
      alert("Message sent successfully! We'll get back to you soon.");
      $(this)[0].reset();
    } else {
      alert("Please fill in all fields.");
    }
  });

  // Newsletter Subscription
  $("#newsletter-btn").click(function() {
    var email = $("#newsletter-email").val();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email && emailRegex.test(email)) {
      alert("Thank you for subscribing to our newsletter!");
      $("#newsletter-email").val("");
    } else {
      alert("Please enter a valid email address.");
    }
  });

  // Lightbox Functionality
  $(".food-img img").click(function() {
    var imgSrc = $(this).attr("src");
    $("#lightbox-img").attr("src", imgSrc);
    $("#lightbox").fadeIn();
  });

  $(".lightbox-close").click(function() {
    $("#lightbox").fadeOut();
  });

  $(window).click(function(event) {
    if (event.target == $("#lightbox")[0]) {
      $("#lightbox").fadeOut();
    }
  });
});
