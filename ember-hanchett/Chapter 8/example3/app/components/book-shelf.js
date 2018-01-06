import { A } from '@ember/array';
import Component from '@ember/component';

export default Component.extend({
    // Create an Ember.NativeArray
    books: A([
        {name: "Moby Dick"}
    ]),

    actions: {
        addBook(name) {
            if (name) {
                this.get("books").addObject({name});
            }

            this.set("name", "");
        }
    }
});
