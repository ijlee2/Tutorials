import Service from "@ember/service";

export default Service.extend({
    isOn: false,
    displayIsOn() {
        return `isOn is set to ${this.get("isOn")}.`;
    }
});
