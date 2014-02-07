function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "jobs.row";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.jobrow = Ti.UI.createTableViewRow({
        hasChild: true,
        id: "jobrow"
    });
    $.__views.jobrow && $.addTopLevelView($.__views.jobrow);
    $.__views.__alloyId0 = Ti.UI.createView({
        height: "70",
        layout: "horizontal",
        id: "__alloyId0"
    });
    $.__views.jobrow.add($.__views.__alloyId0);
    $.__views.jobthumb = Ti.UI.createView({
        left: "5",
        top: "5",
        bottom: "5",
        width: "70dp",
        layout: "vertical",
        id: "jobthumb"
    });
    $.__views.__alloyId0.add($.__views.jobthumb);
    $.__views.monthDay = Ti.UI.createView({
        layout: "vertical",
        width: "50dp",
        height: "50dp",
        backgroundColor: "#f0f4f6",
        borderRadius: "5%",
        borderWidth: "0.5dp",
        id: "monthDay"
    });
    $.__views.jobthumb.add($.__views.monthDay);
    $.__views.month = Ti.UI.createLabel({
        id: "month"
    });
    $.__views.monthDay.add($.__views.month);
    $.__views.day = Ti.UI.createLabel({
        id: "day"
    });
    $.__views.monthDay.add($.__views.day);
    $.__views.__alloyId1 = Ti.UI.createView({
        layout: "vertical",
        left: "5",
        top: "5",
        right: "15",
        bottom: "5",
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.jobtitle = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        color: "#000",
        font: {
            fontSize: "12",
            fontWeight: "bold"
        },
        left: "5",
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
        left: "5",
        text: "placeholder",
        id: "jobsummary"
    });
    $.__views.__alloyId1.add($.__views.jobsummary);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var d = new Date(args.posted_at);
    var month = new Array();
    month[0] = "JAN";
    month[1] = "FEB";
    month[2] = "MAR";
    month[3] = "APR";
    month[4] = "MAY";
    month[5] = "JUN";
    month[6] = "JUL";
    month[7] = "AUG";
    month[8] = "SEP";
    month[9] = "OCT";
    month[10] = "NOV";
    month[11] = "DEC";
    $.jobtitle.text = args.title;
    $.jobsummary.text = args.summary;
    $.month.text = month[d.getMonth()];
    $.day.text = d.getDay();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;