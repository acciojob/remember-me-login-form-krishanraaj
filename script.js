document.addEventListener("DOMContentLoaded", function() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const rememberCheckbox = document.getElementById("checkbox");
    const submitBtn = document.getElementById("submit");
    const existingBtn = document.getElementById("existing");

    // Check if credentials exist in localStorage and show existing user button
    function checkExistingCredentials() {
        const savedUsername = localStorage.getItem("username");
        const savedPassword = localStorage.getItem("password");

        if (savedUsername && savedPassword) {
            existingBtn.style.display = "inline-block"; // show button
        } else {
            existingBtn.style.display = "none"; // hide button
        }
    }

    checkExistingCredentials(); // run on page load

    // Form submission
    document.getElementById("loginForm").addEventListener("submit", function(e) {
        e.preventDefault(); // prevent page reload

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (!username || !password) {
            alert("Please enter username and password");
            return;
        }

        alert(`Logged in as ${username}`);

        if (rememberCheckbox.checked) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }

        checkExistingCredentials();

        // Optionally clear inputs if not remembering
        if (!rememberCheckbox.checked) {
            usernameInput.value = "";
            passwordInput.value = "";
            rememberCheckbox.checked = false;
        }
    });

    // Existing user login
    existingBtn.addEventListener("click", function() {
        const savedUsername = localStorage.getItem("username");
        if (savedUsername) {
            alert(`Logged in as ${savedUsername}`);
        }
    });
});
