import Component from "@ember/component";
import $ from "jquery";

export default Component.extend({
    click() {
        // Use jQuery to fade the HTML document
        $("html").fadeToggle("slow", "linear");
        $("html").delay(250).fadeIn();
    }
});
