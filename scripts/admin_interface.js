function redirectToSettings(){
    console.log('Redirecting to Settings page');
    window.location.href = '2_2_Inventory_Management___Settings.html';
}

function redirectToInventory() {
    console.log('Redirecting to Inventory page');
    window.location.href = '2_2_Inventory_Management___Inventory.html';
}

function redirectToDashboard(){
    console.log("Redirect to dashboard page");
    window.location.href = "5_2_Inventory_Management___Dashboard.html";
}

function redirectToSales(){
    console.log("Redirect to Sales page");
    window.location.href = "2_2_Inventory_Management___Sales.html";
}

function redirectToPurchase(){
    console.log("redirect to Purchase page");
    window.location.href = '2_2_Inventory_Management___Purchase.html';
}

function redirectToLogOut(){
    console.log("redirect to Log Out page");
    window.location.href = '5_3_User_Account_Management___Admin_Logout.html';
}

function redirectToHome(){
    console.log("redirect to Home page");
    window.location.href = '1_1_Home.html';
}

function redirectToLogin1(){
    console.log("redirect to Login 1 page");
    window.location.href = "5_1_Login___1 .html"
}

function redirectToMeetUsPage()
{
    console.log("redirect to meet us page");
    window.location.href = "9_0_Meet_Us.html";
}

function makeEditable(container) {
    const input = document.createElement('input');
    input.value = container.innerText.trim();

    const handleEditEnd = () => {
        container.innerText = input.value;
        container.classList.remove('editable-active');
        container.removeChild(input);

        const key = container.id;
        localStorage.setItem(key, input.value);
    };

    input.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            handleEditEnd();
        } else if (event.key === 'Escape') {
            container.classList.remove('editable-active');
            container.removeChild(input);
        }
    });

    input.addEventListener('focusout', handleEditEnd);

    container.innerHTML = '';
    container.appendChild(input);
    container.classList.add('editable-active');
    input.focus();
}

function loadAndMakeEditable() {
    const editableContainers = document.querySelectorAll('.editable');

    editableContainers.forEach(container => {
        const key = container.id;
        const savedValue = localStorage.getItem(key);

        if (savedValue !== null) {
            container.innerText = savedValue;
        }

        container.addEventListener('click', () => {
            makeEditable(container);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadAndMakeEditable();
});
