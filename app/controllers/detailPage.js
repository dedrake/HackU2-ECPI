var icons=require('icons');
var args = arguments[0] || {};

var posted = new Date(args.posted_at);
var months=new Array();
months[0]="January";
months[1]="February";
months[2]="March";
months[3]="April";
months[4]="May";
months[5]="June";
months[6]="July";
months[7]="August";
months[8]="September";
months[9]="October";
months[10]="November";
months[11]="December";

$.title.text=args.title;
$.employerName.text=args.employer_name;
$.postedAt.text="Posted: " + months[posted.getMonth()] + ", " + posted.getDay();
$.location.text=args.city + ", " + args.state + ", " + args.zip;
$.description.setHtml('<html>' +
	'<head>'+
		'<style type="text/css">'+
            'body{'+
                'background-color: #ffff;'+
                'font-family: "Arial";'+
                'font-size: "10px";'+
                'width: "320px";'+
                'left: "0";'+ 
           ' }'+
        '</style>'+
	'</head>' +
	'<body>' +
	args.description +
	'</body>' +
'</html>');

function goBack(event) {
    $.detailPage.close();
}

function apply(event) {
    var captchaController;
    captchaController = Alloy.createController('captcha', args);
    captchaController.getView().open();
}
