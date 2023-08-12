import ArtWork from "@/models/ArtWork";

const getArtList = async () => {
  return ArtWork.find().limit(9).sort("-createdAt");
};
export default getArtList;
