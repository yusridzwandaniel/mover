// Display Current Date
document.getElementById('current-date').innerText = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
});

// Mock Function to Simulate Real-Time Monitoring
function updateScores() {
    console.log("Fetching latest sports data...");
    // In a 'Pro' version, you would use fetch() to get real data from an API here.
}

// Update scores every 60 seconds
setInterval(updateScores, 60000);
