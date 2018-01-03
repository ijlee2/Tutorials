export default function() {

	this.get('/instructors',['instructors','classes']);
	this.get('/classes',['instructors','classes']);
}
