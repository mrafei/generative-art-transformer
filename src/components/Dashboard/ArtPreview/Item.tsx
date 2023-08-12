import Image from "next/image";
import type { FC } from "react";

type ArtPreviewItemProps = {
  image: string;
};
const ArtPreviewItem: FC<ArtPreviewItemProps> = ({ image }) => (
  <Image
    width={360}
    height={270}
    className="w-[360px] h-[270px] rounded-lg overflow-hidden"
    src={image}
    alt="initial image"
    objectFit="cover"
  />
);
export default ArtPreviewItem;
