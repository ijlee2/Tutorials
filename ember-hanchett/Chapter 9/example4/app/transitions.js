export default function() {
    this.transition(
        this.fromRoute("index"),
        this.toRoute("page1"),
        this.use("crossFade"),
        this.reverse("fade", {"duration": 500})
    );
    
    this.transition(
        this.fromRoute("page1"),
        this.toRoute("page2"),
        this.use("toRight"),
        this.reverse("toLeft")
    );
}
