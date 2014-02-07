var args = arguments[0] || {};

var quasarlib=require('quasarlib');
var parsedData=[];

var onSucces=function(data){
	var row;
	var rows=[];
	rawData=JSON.parse(data);
	parsedData = rawData["job_postings"];

	parsedData.forEach(function(job){
		var payload={
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

		row=Alloy.createController('jobs.row',payload).getView();
		rows.push(row);
	});
	$.jobslist.data=rows;
};

var onError=function(error){
	console.log(error);
};

function rowClick(event){
	Alloy.createController('detailPage', parsedData[event.index]).getView().open();
}

var dataURL="https://quasar-9.herokuapp.com/api/v1/job_postings?auth_token=KGTTnbzgbAC1gzTaVZjs&site_of_origin=ORION&page=2";
var data=quasarlib.getTableData(dataURL,onSucces,onError);

$.jobsIndex.open();