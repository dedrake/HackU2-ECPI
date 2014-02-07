function Controller() {
    function goBack() {
        $.detailPage.close();
    }
    function apply() {
        var captchaController;
        captchaController = Alloy.createController("captcha", args);
        captchaController.getView().open();
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
        backgroundColor: "8cacb7",
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
    apply ? $.__views.submitApplication.addEventListener("click", apply) : __defers["$.__views.submitApplication!click!apply"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        top: "44dp",
        width: "320dp",
<<<<<<< HEAD
        backgroundColor: "white",
        font: {
            fontFamily: "arial",
            fontSize: "16dp",
            fontColor: "04212b"
=======
        backgroundColor: "#8cacb7",
        font: {
            fontFamily: "Arial",
            fontSize: "16dp"
>>>>>>> Forms Page Update
        },
        id: "scrollView"
    });
    $.__views.detailPage.add($.__views.scrollView);
    $.__views.detailView = Ti.UI.createView({
        layout: "vertical",
        left: "5dp",
        width: "310dp",
        backgroundColor: "white",
        font: {
            fontFamily: "arial",
            fontSize: "16dp",
            fontColor: "04212b"
        },
        id: "detailView"
    });
    $.__views.scrollView.add($.__views.detailView);
    $.__views.detailHead = Ti.UI.createView({
        borderWidth: "0.5dp",
        height: Ti.UI.SIZE,
        layout: "vertical",
        width: "300dp",
        borderRadius: "5%",
        left: "5dp",
        backgroundColor: "#f0f4f6",
        id: "detailHead"
    });
    $.__views.detailView.add($.__views.detailHead);
    $.__views.title = Ti.UI.createLabel({
        left: "5dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: "16dp",
            fontWeight: "bold"
        },
        right: "5dp",
        top: "5dp",
        text: "palceholder",
        id: "title"
    });
    $.__views.detailHead.add($.__views.title);
    $.__views.employerName = Ti.UI.createLabel({
        left: "5dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: "14dp",
            fontColor: "#f0f4f6"
        },
        right: "5dp",
        text: "palceholder",
        id: "employerName"
    });
    $.__views.detailHead.add($.__views.employerName);
    $.__views.postedAt = Ti.UI.createLabel({
        left: "5dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: "13dp",
            fontColor: "#f0f4f6",
            fontStyle: "italic"
        },
        right: "5dp",
        text: "palceholder",
        id: "postedAt"
    });
    $.__views.detailHead.add($.__views.postedAt);
    $.__views.location = Ti.UI.createLabel({
        left: "5dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: "13dp",
            fontColor: "#f0f4f6"
        },
        right: "5dp",
        bottom: "5dp",
        text: "palceholder",
        id: "location"
    });
    $.__views.detailHead.add($.__views.location);
    $.__views.description = Ti.UI.createWebView({
        backgroundColor: "white",
        font: {
            fontFamily: "arial",
            fontSize: "16dp",
            fontColor: "04212b"
        },
        id: "description"
    });
    $.__views.detailView.add($.__views.description);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("icons");
    var args = arguments[0] || {};
    var posted = new Date(args.posted_at);
    var months = new Array();
    months[0] = "January";
    months[1] = "February";
    months[2] = "March";
    months[3] = "April";
    months[4] = "May";
    months[5] = "June";
    months[6] = "July";
    months[7] = "August";
    months[8] = "September";
    months[9] = "October";
    months[10] = "November";
    months[11] = "December";
    $.title.text = args.title;
    $.employerName.text = args.employer_name;
    $.postedAt.text = "Posted: " + months[posted.getMonth()] + ", " + posted.getDay();
    $.location.text = args.city + ", " + args.state + ", " + args.zip;
    $.description.setHtml('<html><head><style type="text/css">body{background-color: #ffff;font-family: "Arial";font-size: "10px";width: "320px";left: "0"; }</style></head><body>' + args.description + "</body>" + "</html>");
    __defers["$.__views.backButton!click!goBack"] && $.__views.backButton.addEventListener("click", goBack);
    __defers["$.__views.submitApplication!click!apply"] && $.__views.submitApplication.addEventListener("click", apply);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;