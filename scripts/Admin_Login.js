function navigateToForgotPassword() {
    window.location.href = '5_1_Login___Admin_Forgot_Password___1.html';
  }

  function navigateToInventoryDashboard() {
    const adminId = document.getElementById('ID').value;
    const password = document.getElementById('password').value;
    const correctAdminId = 'admin123';
    const correctPassword = 'password123';

    if (adminId === correctAdminId && password === correctPassword) {
        window.location.href = '5_2_Inventory_Management___Dashboard.html';
    } else {
        const modal = document.getElementById('error-modal');
        const closeModal = document.getElementById('close-modal');
        const modalMessage = document.getElementById('modal-message');
        modal.style.display = 'block';

        // Close the modal when the "x" is clicked
        closeModal.onclick = function() {
            modal.style.display = 'none';
        };

        // Close the modal if the user clicks anywhere outside of it
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };
    }
}