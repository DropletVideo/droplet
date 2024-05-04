// Web Browser
document.getElementById("p1").innerHTML = toString(navigator.appName + navigator.appVersion);

// Opewrating System
document.getElementById("p2").innerHTML = toString(navigator.platform);

// User Agent
document.getElementById("p3").innerHTML = toString(navigator.platform);

// Other Options
document.getElementById("p4").innerHTML = toString(navigator.cookieEnabled);
document.getElementById("p5").innerHTML = toString(navigator.mediaCapabilities);

// Server
import { spawn } from 'child_process';
var command = spawn('cat /proc/version');

command.uname.on('kernel', function(kernel) {
    document.getElementById("p6").innerHTML = toString(kernel);
});