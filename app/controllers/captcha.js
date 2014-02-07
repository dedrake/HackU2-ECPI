(function(){
    Ti.App.addEventListener('formComplete', webViewCallback);
    
    $.win.addEventListener('close', function closeWindow(){
       $.win.removeEventListener('close', closeWindow);
       Ti.App.removeEventListener('formComplete', webViewCallback); 
    });
}());

function goBack(event) {
   $.win.close();
}

function webViewCallback(event) {
    if (event.emailSent) {
        Ti.UI.createAlertDialog({
            title: 'Confirmation',
            ok: 'Great!',
            message: 'Your application for a job was sent! \n Thanks!'
        }).show();
        $.win.close();
    } else {
        Ti.UI.createAlertDialog({
            title: 'Error',
            ok: 'Okay',
            message: 'Your application for a job was not sent! \n Please try again!'
        });
    }
}
