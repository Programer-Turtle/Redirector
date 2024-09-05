let LinkDisplay = document.getElementById("Link")

function MakeURL(){
    let URL = document.getElementById("URL").value
    let GeneratedURL = "https://programer-turtle.github.io/Redirector?" + URL
    LinkDisplay.href = GeneratedURL
    LinkDisplay.innerText = GeneratedURL
}