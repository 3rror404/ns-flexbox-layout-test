var Observable = require("data/observable").Observable;

var pageData = new Observable();

function onNavigatingTo(args) {

    var page = args.object;

    pageData.MemberUserID = 99;

    var comments = [{
        MemberUserID: 11
    },{
        MemberUserID: 99
    }];
    pageData.comments = comments;

    page.bindingContext = pageData;
}
exports.onNavigatingTo = onNavigatingTo;