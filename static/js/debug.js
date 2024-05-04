// Web Browser
document.querySelector('Browser').innerText = toString(navigator.appName);

// Opewrating System
document.querySelector('OS').innerText = toString(navigator.platform);

// User Agent
document.querySelector('UserAgent').innerText = toString(navigator.platform);

// Other Options
document.querySelector('Cookies').innerText = toString(navigator.cookieEnabled);
document.querySelector('Media').innerText = toString(navigator.mediaCapabilities);

// Server
import { spawn } from 'child_process';
var command = spawn('cat /proc/version');

command.uname.on('kernel', function(kernel) {
    document.querySelector('ServerOS').innerText = toString(kernel);
});