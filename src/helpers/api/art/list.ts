import ArtWork from "@/models/ArtWork";

const getArtList = async () => {
  return ArtWork.find();
};
export default getArtList;
