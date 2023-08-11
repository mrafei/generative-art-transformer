import type { FC } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { ImageTransformHook } from "@/hooks/useImageTransform";

type DashboardSidebarProps = Pick<
  ReturnType<ImageTransformHook>,
  "artist" | "setArtist" | "transform" | "image"
>;
const DashboardSidebar: FC<DashboardSidebarProps> = (props) => {
  const { artist, setArtist, transform, image } = props;
  return (
    <div className="flex flex-col gap-4 h-40 p-4 md:h-auto md:w-72 ">
      <Input label="artist" value={artist} onChange={setArtist} />
      <Button onClick={transform} disabled={!artist || !image}>
        Transform!
      </Button>
    </div>
  );
};
export default DashboardSidebar;
