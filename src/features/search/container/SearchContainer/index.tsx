import config from "../../../../config";
import Recoil from "./Recoil";
import Redux from "./Redux";

const SearchContainer = config.stateManagement === "redux" ? Redux : Recoil;

export default SearchContainer;
