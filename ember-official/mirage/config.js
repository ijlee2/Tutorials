export default function() {
    this.namespace = "/api";

    let rentals = [
        {
            "type"      : "rentals",
            "id"        : "grand-old-mansion",
            "attributes": {
                "title"        : "Grand Old Mansion",
                "owner"        : "Veruca Salt",
                "city"         : "San Francisco",
                "property-type": "Estate",
                "bedrooms"     : 15,
                "image"        : "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
                "description"  : "This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests."
            }
        },
        {
            "type"      : "rentals",
            "id"        : "urban-living",
            "attributes": {
                "title"        : "Urban Living",
                "owner"        : "Mike TV",
                "city"         : "Seattle",
                "property-type": "Condo",
                "bedrooms"     : 1,
                "image"        : "https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg",
                "description"  : "A commuters dream. This rental is within walking distance of 2 bus stops and the Metro."
            }
        },
        {
            "type"      : "rentals",
            "id"        : "downtown-charm",
            "attributes": {
                "title"        : "Downtown Charm",
                "owner"        : "Violet Beauregarde",
                "city"         : "Portland",
                "property-type": "Apartment",
                "bedrooms"     : 3,
                "image"        : "https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg",
                "description"  : "Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet."
            }
        }
    ];

    this.get("/rentals", function(db, request) {
        if (request.queryParams.city !== undefined) {
            const searchTerm = request.queryParams.city.toLowerCase();

            const filteredRentals = rentals.filter(function(rental) {
                const city = rental.attributes.city.toLowerCase();

                return city.includes(searchTerm);
            });

            return {"data": filteredRentals};

        } else {
            return {"data": rentals};

        }
    });

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
}