import { helper } from "@ember/component/helper";

const communityPropertyTypes = ["Condo", "Townhouse", "Apartment"];

export function rentalPropertyType([propertyType]) {
    if (communityPropertyTypes.includes(propertyType)) {
        return "Community";

    } else {
        return "Standalone";
        
    }
}

export default helper(rentalPropertyType);