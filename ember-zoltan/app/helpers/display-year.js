import { helper } from "@ember/component/helper";

export function displayYear([unixDate]) {
    const year = unixDate.getFullYear();

    return year;
}

export default helper(displayYear);