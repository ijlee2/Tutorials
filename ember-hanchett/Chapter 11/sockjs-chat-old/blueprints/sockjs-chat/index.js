/*jshint node:true*/
module.exports = {
	normalizeEntityName: function() {
	},

	afterInstall: function() {
		return this.addBowerPackageToProject('sockjs-client', '~1.0.3');
	}
};
