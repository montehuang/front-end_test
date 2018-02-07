function getContentFromTxt(node){
	var xmlHttpObject = getXMLHttpObject();
	if(!xmlHttpObject) return false;
    xmlHttpObject.open('GET', 'content.txt', true);
    xmlHttpObject.send(null);
	xmlHttpObject.onreadystatechange = function(){
        if(xmlHttpObject.readyState == 4){
            if(!document.createElement) return false;
            if(!document.createTextNode) return false;
            if(!(document.getElementById && document.getElementById('addLink'))) return false;
            var newPar = document.createElement('p');
            var content = xmlHttpObject.responseText;
            var contentNode = document.createTextNode(content);
            newPar.appendChild(contentNode);
            insertAfter(newPar, document.getElementById('addLink'));
        }
    }
}

function prepareLinkClick(){
    if(!(document.getElementById && document.getElementById('addLink'))) return false;
    var addLink = document.getElementById('addLink')
    addLink.onclick = function(){
        getContentFromTxt(this);
        return false;
    }
}

addLoadEvent(prepareLinkClick)