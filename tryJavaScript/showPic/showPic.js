function showPic(node){
    if(!document.getElementById("placeholder")) return true;
    var source = node.getAttribute("href");
    var img = document.getElementById("placeholder");
    img.setAttribute("src", source);
    if(!document.getElementById("description")) return false;
    var text = node.getAttribute("title") ? node.getAttribute("title") : "";
    var description  = document.getElementById("description");
    description.firstChild.nodeValue = text;
    return false;
}

function addLoadEvent(func){
    var oldload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }else{
        window.onload = function(){
            oldload();
            func();
        }
    }
}

function insertAfter(newElement, targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

function preparePlaceholder(){
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imageGallery")) return false;
    var placeholder = document.createElement("img");
    placeholder.setAttribute("src", "images/default.jpg");
    placeholder.setAttribute("width", "300");
    placeholder.setAttribute("height", "200");
    placeholder.setAttribute("id", "placeholder");
    var description = document.createElement("p");
    description.setAttribute("id", "description");
    description.appendChild(document.createTextNode("Choose a picutre"));
    var gallery = document.getElementById("imageGallery");
    insertAfter(placeholder, gallery);
    insertAfter(description, placeholder);
}

function popUp(url){
    window.open(url, 'popup', 'width=620,height=480')
}
function prepareGallery(){
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imageGallery")) return false;
    var gallery = document.getElementById("imageGallery");
    var items = gallery.getElementsByTagName('a');
    for(var i = 0; i < items.length; i++){
        items[i].onclick = function(){
            return showPic(this);
        }
        items[i].onkeypress = items[i].onclick;
    }
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
