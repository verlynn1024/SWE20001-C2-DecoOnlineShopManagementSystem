document.addEventListener("DOMContentLoaded", function () {
    // Get references to all heart icons with the specified IDs
    const heartIconC = document.getElementById("Fav_c");
    const heartIconDz = document.getElementById("Fav_dz");
    const heartIconDq = document.getElementById("Fav_dq");
    const heartIconDh = document.getElementById("Fav_dh");
    
    // Add a click event listener to each heart icon
    heartIconC.addEventListener("click", function() {
        // Toggle a class to change the fill color of the heart icon
        this.classList.toggle("clicked");
    });

    heartIconDz.addEventListener("click", function() {
        // Toggle a class to change the fill color of the heart icon
        this.classList.toggle("clicked");
    });

    heartIconDq.addEventListener("click", function() {
        // Toggle a class to change the fill color of the heart icon
        this.classList.toggle("clicked");
    });

    heartIconDh.addEventListener("click", function() {
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

function redirectToSearch(){
    console.log("redirect to search page");
    window.location.href = '6_1_0_Search_Results.html';
}

function redirectToHomeOffice(){
    console.log("redirect to home office page");
    window.location.href = '9_1_Category__Home_Office.html';
}

function redirectToBedroom(){
    console.log("redirect to bedroom page");
    window.location.href = '9_2_Category__Bedroom.html';
}

function redirectToLivingRoom(){
    console.log("redirect to living room page");
    window.location.href = '9_3_Category__Living_Room.html';
}

function redirectToBathroom(){
    console.log("redirect to bathroom page");
    window.location.href = '9_5_Category__Bathroom.html';
}

function redirectToDiningRoom(){
    console.log("redirect to dining room  page");
    window.location.href = '9_4_Category__Dinning_Room.html';
}



