function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "jobs.row";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.jobrow = Ti.UI.createTableViewRow({
        id: "jobrow"
    });
    $.__views.jobrow && $.addTopLevelView($.__views.jobrow);
    $.__views.__alloyId0 = Ti.UI.createView({
        height: "90",
        id: "__alloyId0"
    });
    $.__views.jobrow.add($.__views.__alloyId0);
    $.__views.jobthumb = Ti.UI.createImageView({
        left: "5",
        top: "5",
        width: "80",
        height: "80",
        id: "jobthumb"
    });
    $.__views.__alloyId0.add($.__views.jobthumb);
    $.__views.__alloyId1 = Ti.UI.createView({
        layout: "vertical",
        left: "90",
        top: "5",
        right: "5",
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.jobtitle = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        color: "#000",
        font: {
            fontSize: "12"
        },
        text: "placeholder",
        id: "jobtitle"
    });
    $.__views.__alloyId1.add($.__views.jobtitle);
    $.__views.jobsummary = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        color: "#6D6D6D",
        font: {
            fontSize: "11"
        },
        text: "placeholder",
        id: "jobsummary"
    });
    $.__views.__alloyId1.add($.__views.jobsummary);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.jobtitle.text = args.title;
    $.jobsummary.text = args.summary;
    $.jobthumb.image = args.thumb;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;