import { useState } from "react";
import imageServices from "@/services/image";

export type ImageTransformHook = () => {
  image: Nullable<string>;
  setImage: (image: Nullable<string>) => void;
  artist: string;
  setArtist: (artist: string) => void;
  transform: () => void;
  transformedImage: Nullable<string>;
  setTransformedImage: (image: Nullable<string>) => void;
};
const useImageTransform: ImageTransformHook = () => {
  const [image, setImage] = useState<Nullable<string>>(null);
  const [transformedImage, setTransformedImage] =
    useState<Nullable<string>>(null);
  const [artist, setArtist] = useState<string>("");

  const transform = async () => {
    if (image && artist) {
      const res = await imageServices.transform(image, artist);
      if (res?.final_image_url) setTransformedImage(res?.final_image_url);
    }
  };

  return {
    image,
    setImage,
    artist,
    setArtist,
    transform,
    transformedImage,
    setTransformedImage,
  };
};

export default useImageTransform;
