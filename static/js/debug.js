// Web Browser
document.getElementById("Browser").innerText = toString(navigator.appName + navigator.appVersion);

// Opewrating System
document.getElementById("OS").innerText = toString(navigator.platform);

// User Agent
document.getElementById("UserAgent").innerText = toString(navigator.platform);

// Other Options
document.getElementById("Cookies").innerText = toString(navigator.cookieEnabled);
document.getElementById("Media").innerText = toString(navigator.mediaCapabilities);

// Server
import { spawn } from 'child_process';
var command = spawn('cat /proc/version');

command.uname.on('kernel', function(kernel) {
    document.getElementById("ServerOS").innerText = toString(kernel);
});