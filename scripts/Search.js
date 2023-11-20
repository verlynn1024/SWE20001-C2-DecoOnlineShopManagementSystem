function redirectToSearchResults() {
    // Get the user input from the input field
    const userInput = document.getElementById('searchInput').value;

    // Construct the URL for the search results page (adjust the URL as needed)
    const searchResultsPageUrl = '6_1_There_s_Search_Results.html?q=' + encodeURIComponent(userInput);

    // Redirect the user to the search results page
    window.location.href = searchResultsPageUrl;
}

function redirectToHome(){
    console.log("redirect to home page");
    window.location.href = '1_1_Home.html';
}

function redirectToLogin(){
    console.log("redirect to login in page");
    window.location.href = '5_1_Login___1 .html';
}

function redirectToBag(){
    console.log("redirect to bag item page");
    window.location.href = '3_3_Bag_detail.html';
}