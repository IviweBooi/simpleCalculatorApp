// Get the current dark mode status from local storage
let darkmode = localStorage.getItem('darkmode');

// Function to enable dark mode
function enableDarkmode() {
    // Add the 'darkmode' class to the calculator frame element
    document.getElementById('calc-frame').classList.add('darkmode');
    // Save the dark mode status in local storage as 'active'
    localStorage.setItem('darkmode', 'active');
}

// Function to disable dark mode
function disableDarkmode() {
    // Remove the 'darkmode' class from the calculator frame element
    document.getElementById('calc-frame').classList.remove('darkmode');
    // Save the dark mode status in local storage as null (optional: could use 'inactive')
    localStorage.setItem('darkmode', null);
}

// Check if dark mode was previously enabled when the page loads
if (darkmode === 'active') {
    // If dark mode was active, enable it on page load
    enableDarkmode();
}

// Function to toggle dark mode on button click
function activateThemeChange() {
    // Get the current dark mode status from local storage
    darkmode = localStorage.getItem('darkmode');

    // Check if dark mode is not currently active
    if (darkmode !== 'active') {
        // Enable dark mode if it's not active
        enableDarkmode();
    } else {
        // Disable dark mode if it is currently active
        disableDarkmode();
    }
}