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

    // Find and return the provided rental from our rental list above
    this.get("/rentals/:id", function(db, request) {
        return {"data": rentals.find(rental => request.params.id === rental.id)};
    });
}