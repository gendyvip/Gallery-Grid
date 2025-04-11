var toggler = document.getElementById("toggler")
var bars = document.getElementsByClassName("fa-solid")[0]
var collapsed = document.getElementsByClassName("header__collapsed")[0]
console.log(bars.classList.contains("fa-bars"))
toggler.addEventListener("click", function () {
    if( bars.classList.contains("fa-bars"))
    {
        collapsed.classList.add("FadeDown")
        collapsed.classList.remove("FadeUp")
        collapsed.style.display="flex"
        bars.classList.remove("fa-bars")
        bars.classList.add("fa-xmark")
    }
    else{
        collapsed.classList.remove("FadeDown")
        collapsed.classList.add("FadeUp")
        bars.classList.remove("fa-xmark")
        bars.classList.add("fa-bars")
    }
})