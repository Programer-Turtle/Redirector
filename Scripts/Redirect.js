function Redirect(){
    let Link = location.href
    if(Link.includes("?")){
        let locationOfChar = Link.indexOf("?")
        let RedirectURL = Link.substring(locationOfChar+1)
        console.log(RedirectURL)
        document.getElementById("Title").innerHTML = RedirectURL
        window.location = RedirectURL
    }
    else{
        window.location = "Home.html"
    }
}

Redirect()