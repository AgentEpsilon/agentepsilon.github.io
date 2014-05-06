var loadPage = function (url)
{
	$("#main").load("pages/"+url);
	console.log("Loaded page.");
}