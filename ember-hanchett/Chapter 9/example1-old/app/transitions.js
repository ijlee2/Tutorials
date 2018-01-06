export default function(){
	this.transition(
			this.fromRoute('tut1'),
			this.toRoute('tut2'),
			this.use('toRight'),
			this.reverse('toLeft')

			);
	this.transition(
			this.fromRoute('index'),
			this.toRoute('tut1'),
			this.use('crossFade'),
			this.reverse('fade',{duration: 500})

			);

}
