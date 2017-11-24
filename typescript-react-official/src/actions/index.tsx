import * as constants from "../constants";

// Describe what increment and decrement actions should look like
export interface IncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
    type: constants.DCREMENT_ENTHUSIASM;
}

// Create a type to describe cases where an action can be an increment
// or a decrement
export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

// Create actions
export function incrementEnthusiasm(): IncrementEnthusiasm {
    return {
        "type": constants.INCREMENT_ENTHUSIASM
    }
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        "type": constants.DECREMENT_ENTHUSIASM
    }
}