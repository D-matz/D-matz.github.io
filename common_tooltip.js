// Create tooltip
const tooltip = d3.select("body").append("div")
	.style("position", "fixed")
	.style("background", "rgba(0,0,0,0.8)")
	.style("color", "white")
	.style("padding", "5px")
	.style("border-radius", "3px")
	.style("overflow", "hidden")

let pinnedCountry = null; // Track pinned tooltip


function showTooltip(d, evt) {
	if(evt)
	{
		evt.stopPropagation();//don't also call hideTooltip right after from document eventListener
		if(d)
		{
			const site = d.properties.site ? d.properties.site : "https://example.com";
			//always setting position, but mouseover doesn't replace html
			tooltip.style("visibility", "visible")
				.html(`<iframe src="${site}" width="${window.innerWidth * 0.45}" height="${window.innerHeight * 0.45}" style="border:none;"></iframe>`)
		}



const tooltipWidth = window.innerWidth * 0.45;
const tooltipHeight = window.innerHeight * 0.45;

const leftPos = evt.clientX > window.innerWidth * 0.5 
    ? (evt.clientX - tooltipWidth - 10) + "px"
    : (evt.clientX + 10) + "px";

const topPos = evt.clientY > window.innerHeight * 0.5
    ? (evt.clientY - tooltipHeight - 10) + "px" 
    : (evt.clientY + 10) + "px";

tooltip.style("left", leftPos).style("top", topPos);


	}
	else
    {
		//this case with no click event is from search bar on top
		const site = d.properties.site ? d.properties.site : "https://example.com";
        tooltip.style("visibility", "visible")
			.style("left", "16.5%")
			.style("top", "60px")
			.html(`<iframe src="${site}" height="${window.innerHeight * 0.666666666666666}" width="${window.innerWidth * 0.67}" style="border:none;"></iframe>`)     
    }
}

function hideTooltip(){
	tooltip.style("visibility", "hidden")
	pinnedCountry = null;
}
hideTooltip();

document.addEventListener('click', function(event) {
  hideTooltip();
});


let worldData = null;
let countryDict = {};
d3.json("/colored_world.json", function(data) {
  worldData = data;
  for (let i = 0; i < data.features.length; i++) {
    const feature = data.features[i];
    const countryName = feature.properties.name.toLowerCase();
    countryDict[countryName] = feature;
  }
});

document.getElementById("searchCountry").addEventListener("input", function() {
  const inputValue = this.value.toLowerCase();
  if (countryDict[inputValue]) {
    showTooltip(countryDict[inputValue], null);
  }
});