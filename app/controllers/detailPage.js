var args = arguments[0] || {};

$.title.text=args.title;
$.employer_name.text=args.employer_name;
$.posted_at.text=args.posted_at;
$.city.text=args.city;
$.state.text=args.state;
$.zip.text=args.zip;
$.description.setHtml('<html><body>' + args.description + '</body></html>');

function goBack(event) {
    $.detailPage.close();
}
