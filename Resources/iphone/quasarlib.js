exports.getTableData = function(url, onSucces, onError) {
    var client = Ti.Network.createHTTPClient({
        onload: function() {
            onSucces(this.responseText);
        },
        onerror: function(e) {
            onError(e);
        },
        timeout: 5e3
    });
    client.open("GET", url);
    client.send();
};