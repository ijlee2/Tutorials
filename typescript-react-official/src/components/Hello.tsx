/****************************************************************************

    Initialize

*****************************************************************************/
import * as React from "react";

import "./Hello.css";


/****************************************************************************

    Create component

*****************************************************************************/
export interface Props {
    // name is required, whereas enthusiasmLevel is optional
    "name": string;
    "enthusiasmLevel"?: number;
}

function Hello({name, enthusiasmLevel = 1}: Props) {
    if (enthusiasmLevel <= 0) {
        throw new Error("You could be a little more enthusiastic. :D");
    }

    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)}
            </div>
        </div>
    );
}

export default Hello;


/****************************************************************************

    Helper functions

*****************************************************************************/
function getExclamationMarks(numChars: number) {
    // ES7 feature!
    return "!".repeat(numChars);
}