import Component from "@ember/component";
import d3 from "npm:d3";

export default Component.extend({
    didInsertElement() {
        // Create a svg tag
        let svgContainer = d3.select("#holder")
            .append("svg")
            .attr("width", 700)
            .attr("height", 700);

        // Add a moving circle
        svgContainer
            .append("circle")
            .attr("cx", 250)
            .attr("cy", 250)
            .attr("r", 100)
            .transition()
            .attr("cx", 500)
            .attr("cy", 450)
            .duration(2000)
            .style("fill", "red");
    }
});
