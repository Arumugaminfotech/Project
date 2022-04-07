var myTabs = document.querySelectorAll(".collapsetab");
for (let i of myTabs) {
    i.addEventListener("click", function() {
        var cont = myTabs[i].nextElementSibling;
        if (cont.style.maxHeight) {
            cont.style.maxHeight = null;
        } else {
            cont.style.maxHeight = cont.scrollHeight + "px";
        }
        i.classList.toggle("active");
    });
}
