var progressBar = document.getElementById("progress-bar");
var bars = document.getElementById("bars");
var dragable = document.getElementById("dragable");


function checkScrollPos(){
    var percentageScroll = window.pageYOffset / (document.body.clientHeight - window.innerHeight);
    progressBar.style.height = (percentageScroll * 100) +"%";
    requestAnimationFrame(checkScrollPos);
}

bars.addEventListener("click", function(e) {
    var heightPercentage = e.offsetY / window.innerHeight ;
    var heightOfPage = (document.body.clientHeight - window.innerHeight);
    document.documentElement.scrollTop = heightPercentage* heightOfPage;
});

requestAnimationFrame(checkScrollPos);


//[ 🦔, 🦔, 🦔, 🦔, 🦔 ]
