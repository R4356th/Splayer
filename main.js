var ProjectName = document.getElementById("Project Name").value;
var Username = document.getElementById("Username").value;

function iframeload() {
document.getElementById("project").src="https://snap.berkeley.edu/embed?project=" + ProjectName + "&user="+ Username + "&showTitle=true&showAuthor=true&editButton=true&pauseButton=true"
}
