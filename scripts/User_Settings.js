function makeEditable(container) {
    // Create an input field
    const input = document.createElement('input');
    input.value = container.innerText.trim();
    input.addEventListener('keyup', function (event) {
      // Save changes on Enter, revert on Escape
      if (event.key === 'Enter') {
        container.innerText = input.value;
        container.classList.remove('editable');
        container.removeChild(input);
  
        // Save the updated value to local storage
        var key = container.id;
        localStorage.setItem(key, input.value);
  
        // Redirect to another page (change 'path/to/your/page.html' accordingly)
        window.location.href = 'path/to/your/5_5_User_Account_Management___Details.html';
      } else if (event.key === 'Escape') {
        container.classList.remove('editable');
        container.removeChild(input);
      }
    });
  
    // Append the input field to the container
    container.innerHTML = '';
    container.appendChild(input);
    container.classList.add('editable');
    input.focus();
  }
  
  