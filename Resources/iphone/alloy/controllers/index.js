function Controller() {
    function rowClick(event) {
        Alloy.createController("detailPage", parsedData[event.index]).getView().open();
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
    $.__views.content = Ti.UI.createView({
        top: "20dp",
        id: "content"
    });
    $.__views.home.add($.__views.content);
    $.__views.jobslist = Ti.UI.createTableView({
        id: "jobslist"
    });
    $.__views.content.add($.__views.jobslist);
    rowClick ? $.__views.jobslist.addEventListener("click", rowClick) : __defers["$.__views.jobslist!click!rowClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var quasarlib = require("quasarlib");
    var parsedData = [];
    var onSucces = function(data) {
        var row;
        var rows = [];
        rawData = JSON.parse(data);
        parsedData = rawData["job_postings"];
        parsedData.forEach(function(job) {
            var payload = {
                title: job.title,
                summary: job.employer_name,
                thumb: "http://www.employmentguide.com/company_images/1076__150x60_PlaceHolderBanner.gif",
                id: job.id,
                description: job.description,
                posted_at: job.posted_at,
                city: job.city,
                state: job.state,
                zip: job.zip,
                company_id: job.company_id,
                apply_url: job.apply_url
            };
            row = Alloy.createController("jobs.row", payload).getView();
            rows.push(row);
        });
        $.jobslist.data = rows;
    };
    var onError = function(error) {
        console.log(error);
    };
    var dataURL = "https://quasar-9.herokuapp.com/api/v1/job_postings?auth_token=KGTTnbzgbAC1gzTaVZjs&site_of_origin=ORION";
    quasarlib.getTableData(dataURL, onSucces, onError);
    $.home.open();
    __defers["$.__views.jobslist!click!rowClick"] && $.__views.jobslist.addEventListener("click", rowClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;