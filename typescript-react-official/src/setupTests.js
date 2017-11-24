// For some reason, this file doesn't get called
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({"adapter": new Adapter()});