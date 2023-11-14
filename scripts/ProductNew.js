document.addEventListener("DOMContentLoaded", function () {
    // Get references to all heart icons with the specified IDs
    const heartIconEl = document.getElementById("Fav_el");
    const heartIconEd = document.getElementById("Fav_ed");
    const heartIconD = document.getElementById("Fav_d");
    const heartIconDx = document.getElementById("Fav_dx");
    const heartIconDo = document.getElementById("Fav_do");
    const heartIconDg = document.getElementById("Fav_dg");
    const heartIconC = document.getElementById("Fav_c");
    const heartIconCS = document.getElementById("Fav_cs");
    const heartIconCk = document.getElementById("Fav_ck");
    const heartIconFav = document.getElementById("Fav");
    
    // Add a click event listener to each heart icon
    heartIconEl.addEventListener("click", function() {
        // Toggle a class to change the fill color of the heart icon
        this.classList.toggle("clicked");
    });

    heartIconEd.addEventListener("click", function() {
        // Toggle a class to change the fill color of the heart icon
        this.classList.toggle("clicked");
    });

    heartIconD.addEventListener("click", function() {
        // Toggle a class to change the fill color of the heart icon
        this.classList.toggle("clicked");
    });

    heartIconDx.addEventListener("click", function() {
        // Toggle a class to change the fill color of the heart icon
        this.classList.toggle("clicked");
    });

    heartIconDo.addEventListener("click", function() {
        // Toggle a class to change the fill color of the heart icon
        this.classList.toggle("clicked");
    });

    heartIconDg.addEventListener("click", function() {
        // Toggle a class to change the fill color of the heart icon
        this.classList.toggle("clicked");
    });

    heartIconC.addEventListener("click", function() {
        // Toggle a class to change the fill color of the heart icon
        this.classList.toggle("clicked");
    });

    heartIconCS.addEventListener("click", function() {
        // Toggle a class to change the fill color of the heart icon
        this.classList.toggle("clicked");
    });

    heartIconCk.addEventListener("click", function() {
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



