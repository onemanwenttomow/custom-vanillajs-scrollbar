var progressBar = document.getElementById("progress-bar");
var bars = document.getElementById("bars");
var mouseDown = false;
var heightPercentage, heightOfPage;


function checkScrollPos(){
    var percentageScroll = window.pageYOffset / (document.body.clientHeight - window.innerHeight);
    progressBar.style.top = (percentageScroll * 100) - 5 +"%";
    requestAnimationFrame(checkScrollPos);
}
//
// bars.addEventListener("click", function(e) {
//     heightPercentage = e.offsetY / window.innerHeight ;
//     heightOfPage = (document.body.clientHeight - window.innerHeight);
//     document.documentElement.scrollTop = heightPercentage* heightOfPage;
// });

bars.addEventListener("mousedown", function() {
    console.log("mouse down");
    mouseDown = true;
});

bars.addEventListener("mouseup", function() {
    console.log("mouse up");
    mouseDown = false;
});

progressBar.addEventListener("mousemove", function(e) {
    if (mouseDown) {
        console.log("mouse move");
        console.log(e);
        heightPercentage = e.offsetY / window.innerHeight ;
        heightOfPage = (document.body.clientHeight - window.innerHeight);
        document.documentElement.scrollTop = heightPercentage* heightOfPage;
    }
});

requestAnimationFrame(checkScrollPos);


//[ 🦔, 🦔, 🦔, 🦔, 🦔 ]
