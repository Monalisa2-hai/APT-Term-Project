// Functional programming style JavaScript code
    // Functions to handle various tasks
    const getElement = id => document.getElementById(id);

    const handleClick = event => {
      // Logic to handle button click
      // For demonstration, let's log a message
      console.log('Button clicked!');
    };

    const initialize = () => {
      // Initialize event listeners
      const loginButton = getElement('login-button');
      loginButton.addEventListener('click', handleClick);
    };

    // Run initialization when DOM is ready
    document.addEventListener('DOMContentLoaded', initialize);
