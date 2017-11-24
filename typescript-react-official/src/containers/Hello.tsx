/****************************************************************************

    Initialize

*****************************************************************************/
import { connect, Dispatch } from "react-redux";

import * as actions from "../actions";
import { StoreState } from "../types";

import Hello from "../components/Hello";


/****************************************************************************

    Create container

*****************************************************************************/
export function mapStateToProps({languageName, enthusiasmLevel}: StoreState) {
    return {
        "name": languageName,
        enthusiasmLevel
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
        "onIncrement": () => dispatch(actions.incrementEnthusiasm()),
        "onDecrement": () => dispatch(actions.decrementEnthusiasm())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);