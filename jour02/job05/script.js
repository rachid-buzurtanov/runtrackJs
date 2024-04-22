window.addEventListener("scroll", function() {
    var scrollPercent = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
    document.querySelector("footer").style.backgroundColor = "hsl(" + scrollPercent + ", 100%, 50%)";
});