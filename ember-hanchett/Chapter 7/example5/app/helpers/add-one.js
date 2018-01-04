import { helper } from "@ember/component/helper";

export function addOne(number) {
    return parseInt(number) + 1;
}

export default helper(addOne);
