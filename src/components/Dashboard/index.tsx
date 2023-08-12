"use client";
import useImageTransform from "@/hooks/useImageTransform";
import DashboardRenderer from "@/components/Dashboard/Renderer";
import type { FC } from "react";

const Dashboard: FC = () => {
  const {
    image,
    setImage,
    artist,
    setArtist,
    transformedImage,
    transform,
    setTransformedImage,
  } = useImageTransform();
  return (
    <DashboardRenderer
      image={image}
      setImage={setImage}
      artist={artist}
      setArtist={setArtist}
      transformedImage={transformedImage}
      transform={transform}
      setTransformedImage={setTransformedImage}
    />
  );
};

export default Dashboard;
