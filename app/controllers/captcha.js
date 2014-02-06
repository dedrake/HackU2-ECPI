(function(){
    Ti.App.addEventListener('formComplete', goBack);
    
    $.win.addEventListener('close', function closeWindow(){
       $.win.removeEventListener('close', closeWindow);
       Ti.App.removeEventListener('formComplete', goBack); 
    });
}());

function goBack(event) {
    $.win.close();
}