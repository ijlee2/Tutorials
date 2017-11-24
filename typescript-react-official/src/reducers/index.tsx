import { EnthusiasmAction } from "../actions";
import { StoreState } from "../types";
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from "../constants";

export function enthusiasm(state: StoreState, action: EnthusiasmAction): StoreState {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return {
                ...state,
                "enthusiasmLevel": Math.min(state.enthusiasmLevel + 1, 10)
            };

        case DECREMENT_ENTHUSIASM:
            return {
                ...state,
                "enthusiasmLevel": Math.max(state.enthusiasmLevel - 1, 1)
            };

        default:
            return state;

    }
}