var loadPage = function (url)
{
	$("#main").load("pages/"+url);
	$(".tab").toggleClass("current");
	console.log("Loaded page.");
};