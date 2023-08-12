import { useState } from "react";
import artServices from "@/services/art";

type ImageObject = Nullable<{ url: string; id: string }>;
export type ImageTransformHook = () => {
  image: Nullable<string>;
  setImage: (image: Nullable<string>) => void;
  artist: string;
  setArtist: (artist: string) => void;
  transform: () => void;
  transformedImage: ImageObject;
  setTransformedImage: (image: ImageObject) => void;
};
const useImageTransform: ImageTransformHook = () => {
  const [image, setImage] = useState<Nullable<string>>(null);
  const [transformedImage, setTransformedImage] =
    useState<ReturnType<ImageTransformHook>["transformedImage"]>(null);
  const [artist, setArtist] = useState<string>("");

  const transform = async () => {
    if (image && artist) {
      const res = await artServices.transform(image, artist);
      if (res?.final_image_url)
        setTransformedImage({ id: res.id, url: res.final_image_url });
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
