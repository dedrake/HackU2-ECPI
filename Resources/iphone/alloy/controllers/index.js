function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.home = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "home"
    });
    $.__views.home && $.addTopLevelView($.__views.home);
    $.__views.jobslist = Ti.UI.createTableView({
        id: "jobslist"
    });
    $.__views.home.add($.__views.jobslist);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var quasarlib = require("quasarlib");
    var onSucces = function(data) {
        var parsedData = JSON.parse(data);
        var row;
        var rows = [];
        parsedData["job_postings"].forEach(function(job) {
            var payload = {
                title: job.title,
                summary: job.employer_name,
                thumb: "http://www.employmentguide.com/company_images/1076__150x60_PlaceHolderBanner.gif"
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
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;