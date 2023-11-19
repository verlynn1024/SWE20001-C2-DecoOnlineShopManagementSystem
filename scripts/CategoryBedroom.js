document.addEventListener("DOMContentLoaded", function () {
    // Get references to all heart icons with the specified IDs
    const heartIconEo = document.getElementById("Fav_eo");
    const heartIconEg = document.getElementById("Fav_eg");
    const heartIconEa = document.getElementById("Fav_ea");
    const heartIconD = document.getElementById("Fav_d");
    const heartIconDr = document.getElementById("Fav_dr");
    const heartIconDj = document.getElementById("Fav_dj");
    const heartIconC = document.getElementById("Fav_c");
    const heartIconCv = document.getElementById("Fav_cv");
    const heartIconCn = document.getElementById("Fav_cn");
    const heartIconFav = document.getElementById("Fav");
    
    // Add a click event listener to each heart icon
    heartIconEo.addEventListener("click", function() {
        // Toggle a class to change the fill color of the heart icon
        this.classList.toggle("clicked");
    });

    heartIconEg.addEventListener("click", function() {
        // Toggle a class to change the fill color of the heart icon
        this.classList.toggle("clicked");
    });

    heartIconEa.addEventListener("click", function() {
        // Toggle a class to change the fill color of the heart icon
        this.classList.toggle("clicked");
    });

    heartIconD.addEventListener("click", function() {
        // Toggle a class to change the fill color of the heart icon
        this.classList.toggle("clicked");
    });

    heartIconDr.addEventListener("click", function() {
        // Toggle a class to change the fill color of the heart icon
        this.classList.toggle("clicked");
    });

    heartIconDj.addEventListener("click", function() {
        // Toggle a class to change the fill color of the heart icon
        this.classList.toggle("clicked");
    });

    heartIconC.addEventListener("click", function() {
        // Toggle a class to change the fill color of the heart icon
        this.classList.toggle("clicked");
    });

    heartIconCv.addEventListener("click", function() {
        // Toggle a class to change the fill color of the heart icon
        this.classList.toggle("clicked");
    });

    heartIconCn.addEventListener("click", function() {
        // Toggle a class to change the fill color of the heart icon
        this.classList.toggle("clicked");
    });

    heartIconFav.addEventListener("click", function() {
        // Toggle a class to change the fill color of the heart icon
        this.classList.toggle("clicked");
    });
  
});


function redirectToHome(){
    console.log("redirect to home page");
    window.location.href = '1_1_Home.html';
}

function redirectToSofas(){
    console.log("redirect to Sofa page");
    window.location.href = '8_2_Product___Sofas.html';
}

function redirectToChairs(){
    console.log("redirect to Chair page");
    window.location.href = '8_3_Products__Chairs.html';
}

function redirectToBeds(){
    console.log("redirect to bed page");
    window.location.href = '8_4__Products__Bed.html';
}

function redirectToLights(){
    console.log("redirect to Lights page");
    window.location.href = '8_5_Products__Lighting.html';
}

function redirectToMeetUs(){
    console.log("redirect to meet us page");
    window.location.href = '9_0_Meet_Us.html';
}

function redirectToLogin(){
    console.log("redirect to login in page");
    window.location.href = '5_1_Login___1 .html';
}

function redirectToBag(){
    console.log("redirect to bag item page");
    window.location.href = '3_3_Bag_detail.html';
}

function scrollToTop() {
    const container = document.querySelector('.Container-Category');
    container.scrollIntoView({ behavior: 'smooth' });
  }

function redirectToSearch(){
    console.log("redirect to search page");
    window.location.href = '6_1_0_Search_Results.html';
}



