/****************************************************************************

    Initialize

*****************************************************************************/
import * as React  from "react";
import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

configure({"adapter": new Adapter()});

import Hello from "./Hello";


/****************************************************************************

    Create tests

*****************************************************************************/
describe("A suite", function() {
    it("renders the correct text when no enthusiasm level is given", () => {
        const hello  = shallow(<Hello name="Daniel" />);
        const output = hello.find(".greeting").text();

        expect(output).toEqual("Hello Daniel!");

    });

    it("renders the correct text when the enthusiasm level is 1", () => {
        const hello  = shallow(<Hello name="Daniel" enthusiasmLevel={1} />);
        const output = hello.find(".greeting").text();

        expect(output).toEqual("Hello Daniel!");

    });

    it("renders the correct text when the enthusiasm level is 5", () => {
        const hello  = shallow(<Hello name="Daniel" enthusiasmLevel={5} />);
        const output = hello.find(".greeting").text();

        expect(output).toEqual("Hello Daniel!!!!!");

    });

    it("throws an exception when the enthusiasm level is 0", () => {
        const output = () => {
            shallow(<Hello name="Daniel" enthusiasmLevel={0} />)
        };

        expect(output).toThrow();

    });

    it("throws an exception when the enthusiasm level is negative", () => {
        const output = () => {
            shallow(<Hello name="Daniel" enthusiasmLevel={-1} />)
        };

        expect(output).toThrow();

    });
});