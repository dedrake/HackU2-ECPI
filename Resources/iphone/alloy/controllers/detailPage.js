function Controller() {
    function goBack() {
        $.detailPage.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "detailPage";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.detailPage = Ti.UI.createWindow({
        backgroundColor: "white",
        top: "20dp",
        id: "detailPage"
    });
    $.__views.detailPage && $.addTopLevelView($.__views.detailPage);
    $.__views.backButton = Ti.UI.createButton({
        top: "0",
        left: "0",
        height: "44dp",
        width: "120dp",
        title: "Back",
        id: "backButton"
    });
    $.__views.detailPage.add($.__views.backButton);
    goBack ? $.__views.backButton.addEventListener("click", goBack) : __defers["$.__views.backButton!click!goBack"] = true;
    $.__views.submitApplication = Ti.UI.createButton({
        top: "0",
        right: "0",
        width: "120dp",
        title: "Apply",
        id: "submitApplication"
    });
    $.__views.detailPage.add($.__views.submitApplication);
    $.__views.scrollView = Ti.UI.createScrollView({
        top: "44dp",
        width: "320dp",
        id: "scrollView"
    });
    $.__views.detailPage.add($.__views.scrollView);
    $.__views.detailView = Ti.UI.createView({
        layout: "vertical",
        left: "10dp",
        width: "310dp",
        id: "detailView"
    });
    $.__views.scrollView.add($.__views.detailView);
    $.__views.title = Ti.UI.createLabel({
        left: "0",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "palceholder",
        id: "title"
    });
    $.__views.detailView.add($.__views.title);
    $.__views.employer_name = Ti.UI.createLabel({
        left: "0",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "palceholder",
        id: "employer_name"
    });
    $.__views.detailView.add($.__views.employer_name);
    $.__views.posted_at = Ti.UI.createLabel({
        left: "0",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "palceholder",
        id: "posted_at"
    });
    $.__views.detailView.add($.__views.posted_at);
    $.__views.city = Ti.UI.createLabel({
        left: "0",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "palceholder",
        id: "city"
    });
    $.__views.detailView.add($.__views.city);
    $.__views.state = Ti.UI.createLabel({
        left: "0",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "palceholder",
        id: "state"
    });
    $.__views.detailView.add($.__views.state);
    $.__views.zip = Ti.UI.createLabel({
        left: "0",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "palceholder",
        id: "zip"
    });
    $.__views.detailView.add($.__views.zip);
    $.__views.description = Ti.UI.createWebView({
        id: "description"
    });
    $.__views.detailView.add($.__views.description);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.title.text = args.title;
    $.employer_name.text = args.employer_name;
    $.posted_at.text = args.posted_at;
    $.city.text = args.city;
    $.state.text = args.state;
    $.zip.text = args.zip;
    $.description.setHtml("<html><body>" + args.description + "</body></html>");
    __defers["$.__views.backButton!click!goBack"] && $.__views.backButton.addEventListener("click", goBack);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;