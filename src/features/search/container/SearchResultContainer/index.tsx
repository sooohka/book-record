import config from "../../../../config";
import Recoil from "./Recoil";
import Redux from "./Redux";

const SearchResultContainer =
  config.stateManagement === "redux" ? Redux : Recoil;

export default SearchResultContainer;
