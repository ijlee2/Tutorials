import DS from "ember-data";

export default DS.JSONAPIAdapter.extend({
    // Customize endpoint path
    namespace: "api/v1"

    // Customize host
    // host: "https://api.example.com"
    
    // Customize headers
    // headers: {
    //     "API_KEY": "secret key",
    //     "ANOTHER_HEADER": "Some header value"
    // }
});
