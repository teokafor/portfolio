

console.log("this is a test!");

function printToConsole() {
    console.log("Figures");
}

function accordion(contentId) {
    var x = document.getElementById(contentId);
    if (x.className.indexOf("accord-show") == -1) {
        x.className += " accord-show";
    } else {
        x.className = x.className.replace(" accord-show", "");
    }
}

let testString = 'insertion success!';

console.log('Here is a test: ' + testString);