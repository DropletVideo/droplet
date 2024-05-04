// Web Browser
document.getElementById("Browser").textContent = toString(navigator.appName + navigator.appVersion);

// Opewrating System
document.getElementById("OS").textContent = toString(navigator.platform);

// User Agent
document.getElementById("UserAgent").textContent = toString(navigator.platform);

// Other Options
document.getElementById("Cookies").textContent = toString(navigator.cookieEnabled);
document.getElementById("Media").textContent = toString(navigator.mediaCapabilities);

// Server
import { spawn } from 'child_process';
var command = spawn('cat /proc/version');

command.uname.on('kernel', function(kernel) {
    document.getElementById("ServerOS").textContent = toString(kernel);
});