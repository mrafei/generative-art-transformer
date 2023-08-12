import DashboardSidebar from "@/components/Dashboard/Sidebar";
import DashboardCanvas from "@/components/Dashboard/Canvas";
import type { FC } from "react";
import type { ImageTransformHook } from "@/hooks/useImageTransform";

const DashboardRenderer: FC<ReturnType<ImageTransformHook>> = (props) => {
  const {
    image,
    artist,
    setArtist,
    transformedImage,
    transform,
    setTransformedImage,
    setImage,
  } = props;
  return (
    <div className="flex flex-col-reverse md:flex-row flex-1">
      <DashboardSidebar
        image={image}
        artist={artist}
        setArtist={setArtist}
        transform={transform}
      />
      <DashboardCanvas
        image={image}
        transformedImage={transformedImage}
        setTransformedImage={setTransformedImage}
        setImage={setImage}
      />
    </div>
  );
};

export default DashboardRenderer;
