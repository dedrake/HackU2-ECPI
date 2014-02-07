var icons=require('icons');
var args = arguments[0] || {};

$.title.text=args.title;
$.employer_name.text=args.employer_name;
$.posted_at.text=args.posted_at;
$.city.text=args.city;
$.state.text=args.state;
$.zip.text=args.zip;
$.description.setHtml('<html><body>' + args.description + '</body></html>');
$.sendIcon.text=icons.glass;

function goBack(event) {
    $.detailPage.close();
}

function apply(event) {
    var captchaController;
    captchaController = Alloy.createController('captcha', args);
    captchaController.getView().open();
}
