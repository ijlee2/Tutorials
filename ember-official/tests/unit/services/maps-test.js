import { moduleFor, test } from "ember-qunit";
import EmberObject from "@ember/object";

const DUMMY_ELEMENT = {};

const MapUtilStub = EmberObject.extend({
    createMap(element, location) {
        this.assert.ok(element, "createMap called with element");
        this.assert.ok(location, "createMap called with location");

        return DUMMY_ELEMENT;
    }
});

moduleFor("service:maps", "Unit | Service | maps");

test("should create a new map if one isn't cached for location", function(assert) {
    assert.expect(4);

    const stubMapUtil = MapUtilStub.create({assert});
    const mapService  = this.subject({"mapUtil": stubMapUtil});
    const element     = mapService.getMapElement("San Francisco");

    assert.ok(element, "element exists");
    assert.equal(element.className, "map", "element has class name of map");
});

test("should use existing map if one is cached for location", function(assert) {
    assert.expect(1);

    const stubCachedMaps = EmberObject.create({
        "sanFrancisco": DUMMY_ELEMENT
    });
    const mapService = this.subject({"cachedMaps": stubCachedMaps});
    const element    = mapService.getMapElement("San Francisco");
    
    assert.equal(element, DUMMY_ELEMENT, "element fetched from cache");
});