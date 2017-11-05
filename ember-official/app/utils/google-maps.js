import EmberObject from "@ember/object";

const google = window.google;

export default EmberObject.extend({
    init() {
        this.set("geocoder", new google.maps.Geocoder());
    },

    createMap(element, location) {
        const map = new google.maps.Map(element, {"scrollwheel": false, "zoom": 10});

        this.pinLocation(location, map);

        return map;
    },

    pinLocation(location, map) {
        this.get("geocoder").geocode({"address": location}, (result, status) => {
            if (status === google.maps.GeocoderStatus.OK) {
                const geometry = result[0].geometry.location;
                const position = {"lat": geometry.lat(), "lng": geometry.lng()};

                map.setCenter(position);

                new google.maps.Marker({position, map, "title": location});

            }

        });
    }
});