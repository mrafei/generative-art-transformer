import transformImage from "./transformImage";
import getArt from "./get";
import getArtsList from "./list";

const artServices = {
  get: getArt,
  transform: transformImage,
  list: getArtsList,
};
export default artServices;
