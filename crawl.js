var links_to_visit = [];
$("#_desktop_top_menu a").each(function (index) {
    if (links_to_visit[index] != "" || links_to_visit[index] != undefined) {
        links_to_visit.push($(this).attr('href'));
    }
});

function visitLink(index) {
    var nextIndex = index += 1;
    $("body").html("<h1>" + index + "/" + links_to_visit.length + "</h1>" +
        "<iframe src='" + links_to_visit[index] + "' onload='visitLink(" + nextIndex + ")' style='width:100%;height:900px;'></iframe>");
}

visitLink(0);