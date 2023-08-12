import ArtPreviewItem from "./Item";
import type { FC } from "react";
import type { IArtWork } from "@/types/artwork";

const ArtPreview: FC<IArtWork> = (props) => {
  const { initial_image_url, final_image_url, artist } = props;
  return (
    <div className="flex flex-col-reverse md:flex-row flex-1">
      <div className="flex flex-col p-10 justify-center items-center flex-1 bg-neutral-200 gap-4 md:flex-row">
        <ArtPreviewItem image={initial_image_url} />
        <div>{artist}</div>
        <ArtPreviewItem image={final_image_url} />
      </div>
    </div>
  );
};
export default ArtPreview;
