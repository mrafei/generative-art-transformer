"use client";
import type { FC } from "react";
import useImageTransform from "@/hooks/useImageTransform";
import DashboardCanvas from "@/components/Dashboard/Canvas";
import DashboardSidebar from "@/components/Dashboard/Sidebar";

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

export default Dashboard;
