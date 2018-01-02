export default function() {

	this.get('/books');
	this.get('/books/:id');
	this.put('/books/:id');
	this.post('/books');
	this.delete('/books/:id');
}
