document.addEventListener("DOMContentLoaded", function () {
    // Get references to all heart icons with the specified IDs
    const heartIconEs = document.getElementById("Fav_es");
    const heartIconEk = document.getElementById("Fav_ek");
    const heartIconEc = document.getElementById("Fav_ec");
    const heartIconD = document.getElementById("Fav_d");
    const heartIconDv = document.getElementById("Fav_dv");
    const heartIconDn = document.getElementById("Fav_dn");
    const heartIconC = document.getElementById("Fav_c");
    const heartIconCx = document.getElementById("Fav_cx");
    const heartIconCp = document.getElementById("Fav_cp");
    const heartIconFav = document.getElementById("Fav");
    
    // Add a click event listener to each heart icon
    heartIconEs.addEventListener("click", function() {
        // Toggle a class to change the fill color of the heart icon
        this.classList.toggle("clicked");
    });

    heartIconEk.addEventListener("click", function() {
        // Toggle a class to change the fill color of the heart icon
        this.classList.toggle("clicked");
    });

    heartIconEc.addEventListener("click", function() {
        // Toggle a class to change the fill color of the heart icon
        this.classList.toggle("clicked");
    });

    heartIconD.addEventListener("click", function() {
        // Toggle a class to change the fill color of the heart icon
        this.classList.toggle("clicked");
    });

    heartIconDv.addEventListener("click", function() {
        // Toggle a class to change the fill color of the heart icon
        this.classList.toggle("clicked");
    });

    heartIconDn.addEventListener("click", function() {
        // Toggle a class to change the fill color of the heart icon
        this.classList.toggle("clicked");
    });

    heartIconC.addEventListener("click", function() {
        // Toggle a class to change the fill color of the heart icon
        this.classList.toggle("clicked");
    });

    heartIconCx.addEventListener("click", function() {
        // Toggle a class to change the fill color of the heart icon
        this.classList.toggle("clicked");
    });

    heartIconCp.addEventListener("click", function() {
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

function redirectToNewin(){
    console.log("redirect to home page");
    window.location.href = '8_1_Product___New_In.html';
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
