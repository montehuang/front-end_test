function showPic(node){
    var source = node.getAttribute("href");
    var img = document.getElementById("description");
    img.setAttribute("src", source);
    var text = node.getAttribute("title");
    var placeholder = document.getElementById("placeholder");
    placeholder.firstChild.nodeValue = text;
}

function popUp(url){
    window.open(url, 'popup', 'width=620,height=480')
}
window.onload = function(){
    if(!document.getElementsByTagName) return false;
    var items = document.getElementsByTagName('a');
    for(var i = 0; i < items.length; i++){
        if(items[i].getAttribute('class') == 'popup'){
            items[i].onclick = function(){
                popUp(this.getAttribute('href'));
                return false;
            }
        }
    }
}
