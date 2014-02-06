var quasarlib=require('quasarlib');

var onSucces=function(data){
	var parsedData=JSON.parse(data);
	var row;
	var rows=[];

	parsedData["job_postings"].forEach(function(job){
		var payload={
			title: job.title,
			summary: job.employer_name,
			thumb: "http://www.employmentguide.com/company_images/1076__150x60_PlaceHolderBanner.gif"
		};

		row=Alloy.createController('jobs.row',payload).getView();
		rows.push(row);
	});
	$.jobslist.data=rows;
}

var onError=function(error){
	console.log(error);
}

var dataURL="https://quasar-9.herokuapp.com/api/v1/job_postings?auth_token=KGTTnbzgbAC1gzTaVZjs&site_of_origin=ORION";
var data=quasarlib.getTableData(dataURL,onSucces,onError);

$.home.open();
