document.addEventListener("DOMContentLoaded", function () {
    // Get references to the SVG buttons and the number span element
    const incrementButton = document.getElementById("incrementButton");
    const decrementButton = document.getElementById("decrementButton");
    const numberSpan = document.querySelector("#n_ span");
  
    let itemNumber = 1; // Initialize the item number to 1
  
    // Function to update the displayed item number
    function updateItemNumber() {
      numberSpan.textContent = itemNumber;
    }
  
    // Add a click event listener to the increment button
    incrementButton.addEventListener("click", () => {
      itemNumber++;
      updateItemNumber();
    });
  
    // Add a click event listener to the decrement button
    decrementButton.addEventListener("click", () => {
      if (itemNumber > 1) {
        itemNumber--;
        updateItemNumber();
      }
    });
  
    // Initialize the item number display
    updateItemNumber();
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the heart icon by its ID
    const heartIcon = document.getElementById("Fav");

    // Add a click event listener to the heart icon
    heartIcon.addEventListener("click", function() {
      // Toggle a class to change the fill color of the heart icon
      heartIcon.classList.toggle("clicked");
    });
  });

  function goToBagDetails() {
    // Redirect to the bag details page
    window.location.href = "3_3_Bag_detail.html";
  }