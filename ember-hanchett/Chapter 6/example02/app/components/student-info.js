import Component from "@ember/component";

// Use destructuring so that we can type $ instead of Ember.$
const {$} = Ember;

export default Component.extend({
    click() {
        // Use jQuery to fade the HTML document
        $("html").fadeToggle("slow", "linear");
        $("html").delay(250).fadeIn();
    }
});
