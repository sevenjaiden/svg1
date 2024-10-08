
const topRectTopRightX = 300;
const topRectTopRightY = 70;

console.log(d3)

const svg = d3.select("body")
							.append("svg")
							.attr("width", 500)
							.attr("height", 500);
							// or you can write it like .attr("viewBox", [0, 0, 500, 500])

d3.select("svg")
    .append("rect")
    .attr("x", topRectTopRightX - 250)
    .attr("y", topRectTopRightY - 20)  // connects one line to one rect
    .attr("width", 250)
    .attr("height", 20)
    .style("fill", "none")
    .style("stroke", "black")

d3.select("svg")
    .append("circle")
    .attr("cx", 150)
    .attr("cy", 130)
    .attr("width", 100)
    .attr("height", 100)
    .attr("r", 70)
    .style("fill", "red")

d3.select("svg")
    .append("rect")
    .attr("x", 100)
    .attr("y", 150)
    .attr("width", 50)
    .attr("height", 250)
    .style("fill", "none")
    .style("stroke", "black")
    .style("stroke-width", 3)

d3.select("svg")
    .append("line")
    .attr("x1", topRectTopRightX)
    .attr("y1", topRectTopRightY)
    .attr("x2", 150)
    .attr("y2", 400)
    .attr("stroke", "black")

d3.select("svg")
    .append("line")
    .attr("x1", 300)
    .attr("y1", 50)
    .attr("x2", 150)
    .attr("y2", 150)
    .attr("stroke", "black")

d3.select("svg")
    .append("line")
    .attr("x1", 50)
    .attr("y1", 50)
    .attr("x2", 100)
    .attr("y2", 150)
    .attr("stroke", "black")

d3.select("svg")
    .append("line")
    .attr("x1", 50)
    .attr("y1", 70)
    .attr("x2", 100)
    .attr("y2", 400)
    .attr("stroke", "black")





// const dataset = [25, 30, 45, 60, 20];

// const svg = d3.select("body")
//   .append("svg")
//   .attr("width", 500)
//   .attr("height", 100);

// svg.selectAll("rect")
//   .data(dataset)
//   .enter()
//   .append("rect")
//   .attr("x", (d, i) => i * 60)
//   .attr("y", d => 100 - d)
//   .attr("width", 50)
//   .attr("height", d => d)
//   .attr("fill", "teal");
