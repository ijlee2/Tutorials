import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [
            {
                id: 1,
                name: "Erik Hanchett",
                age: 16,
                location: "Reno"
            },
            {
                id: 2,
                name: "Jeff Smith",
                age: 17,
                location: "San Francisco"
            },
            {
                id: 3,
                name: "Kate Smith",
                age: 19,
                location: "Sparks"
            }
        ];
    }
});
