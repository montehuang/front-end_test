function getXMLHttpObject(){
	var xmlHttpObject;
	if(window.XMLHttpRequest){
		xmlHttpObject = new XMLHttpRequest();
	}else if(window.ActiveXObject){
		xmlHttpObject = new ActiveXObject("Microsoft.XMLHTTP")
	}else{
		alert("Your browser does not support XMLHTTP.");
	}
	return xmlHttpObject
}