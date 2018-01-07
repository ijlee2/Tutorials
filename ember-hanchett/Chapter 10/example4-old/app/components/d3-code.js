/* global d3 */
import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement() {
		const svgContainer = d3.select('#holder').append('svg').attr('width',700)
															.attr('height',700);

		svgContainer.append('circle').attr('cx',250)
												  .attr('cy',250)
												  .attr('r', 100)
												  .transition()
												  .attr('cx',500)
												  .attr('cy',450)
												  .duration(2000)
												  .style('fill','red');

	}
});
