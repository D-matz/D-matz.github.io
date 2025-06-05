// Create tooltip
const tooltip = d3.select("body").append("div")
	.style("position", "fixed")
	.style("background", "rgba(0,0,0,0.8)")
	.style("color", "white")
	.style("padding", "5px")
	.style("border-radius", "3px")
	.style("overflow", "hidden")

let pinnedCountry = null; // Track pinned tooltip

// Helper function to show tooltip
function showTooltip(d, evt) {
	if(d)
	{
		const site = d.properties.site ? d.properties.site : "https://example.com";
		tooltip.style("visibility", "visible")
			.html(`<iframe src="${site}" width="${window.innerWidth / 2.3}" height="${window.innerHeight / 2.3}" style="border:none;"></iframe>`)
	}
	tooltip.style("left", (evt.clientX + 10) + "px").style("top", (evt.clientY + 10) + "px");
}

function hideTooltip(){
	tooltip.style("visibility", "hidden")
	pinnedCountry = null;
}
hideTooltip();


if(typeof svg !== 'undefined')
{
	document.addEventListener("click", function (event) {
	  const isInsideSVG = svg.node().contains(event.target);
	  if (!isInsideSVG) {
		hideTooltip();
	  }
	});
}