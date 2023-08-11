"use client";
import type { FC } from "react";
import useImageTransform from "@/hooks/useImageTransform";
import DashboardCanvas from "@/components/Dashboard/Canvas";
import DashboardSidebar from "@/components/Dashboard/Sidebar";

const Dashboard: FC = () => {
  const { image, setImage, artist, setArtist, transformedImage, transform } =
    useImageTransform();
  return (
    <div className="flex flex-col-reverse md:flex-row flex-1">
      <DashboardSidebar />
      <DashboardCanvas />
    </div>
  );
};

export default Dashboard;
