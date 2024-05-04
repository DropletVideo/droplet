// Web Browser
document.getElementById("Browser").innerHTML = toString(navigator.appName + navigator.appVersion);

// Opewrating System
document.getElementById("OS").innerHTML = toString(navigator.platform);

// User Agent
document.getElementById("UserAgent").innerHTML = toString(navigator.platform);

// Other Options
document.getElementById("Cookies").innerHTML = toString(navigator.cookieEnabled);
document.getElementById("Media").innerHTML = toString(navigator.mediaCapabilities);