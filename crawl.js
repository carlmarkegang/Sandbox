var links_to_visit = [];
var start = new Date().toLocaleTimeString(); 
$("#_desktop_top_menu a").each(function (index) {
    if (links_to_visit[index] != "" || links_to_visit[index] != undefined) {
        links_to_visit.push($(this).attr('href'));
    }
});

function visitLink(index) {
    if (index < links_to_visit.length) {
        var nextIndex = index += 1;
        var current = new Date().toLocaleTimeString(); 
        $("body").html("<h1>" + index + "/" + links_to_visit.length + " Start: " + start + " Last update: " + current  + "</h1>" +
            "<iframe src='" + links_to_visit[index] + "' onload='visitLink(" + nextIndex + ")' style='width:100%;height:900px;'></iframe>");
    }
}

visitLink(0);


//------------------------------------------------------
// Open instead of iframe:
var links_to_visit = [];
var start = new Date().toLocaleTimeString();
$("#_desktop_top_menu a").each(function (index) {
    if (links_to_visit[index] != "" || links_to_visit[index] != undefined) {
        links_to_visit.push($(this).attr('href'));
    }
});

function visitLink(index) {
    if (index < links_to_visit.length) {
        var nextIndex = index += 1;
        var current = new Date().toLocaleTimeString();
        window.open(links_to_visit[index]);
        console.log(index + "/" + links_to_visit.length + " Start: " + start + " Last update: " + current);
        setTimeout(function () {
            visitLink(nextIndex)
        }, 1000);
    }
}

visitLink(0);
