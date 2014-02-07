function Controller() {
    function startClick() {
        Alloy.createController("jobsIndex").getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.home = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "home"
    });
    $.__views.home && $.addTopLevelView($.__views.home);
    $.__views.welcome = Ti.UI.createView({
        top: "60dp",
        layout: "vertical",
        id: "welcome"
    });
    $.__views.home.add($.__views.welcome);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Welcome to Emoticaptcha!",
        id: "__alloyId0"
    });
    $.__views.welcome.add($.__views.__alloyId0);
    $.__views.startSearch = Ti.UI.createButton({
        top: "30dp",
        left: "90dp",
        height: "44dp",
        width: "120dp",
        title: "Start My Search!",
        id: "startSearch"
    });
    $.__views.welcome.add($.__views.startSearch);
    startClick ? $.__views.startSearch.addEventListener("click", startClick) : __defers["$.__views.startSearch!click!startClick"] = true;
    $.__views.__alloyId1 = Ti.UI.createImageView({
        image: "/images/emoticaptcha_logo.png",
        bottom: "20dp",
        id: "__alloyId1"
    });
    $.__views.home.add($.__views.__alloyId1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.home.open();
    __defers["$.__views.startSearch!click!startClick"] && $.__views.startSearch.addEventListener("click", startClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;