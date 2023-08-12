import type { FC } from "react";
import useArtList from "@/hooks/useArtList";
import Image from "next/image";
import Link from "next/link";
import { ART_ROUTE } from "@/constants/routes";

const DashboardRecentArts: FC = () => {
  const arts = useArtList();

  return (
    <div>
      <div className="my-3">Be Inspired!</div>
      <div className="hidden flex-wrap gap-2 md:flex">
        {arts?.map(({ id, final_image_url, artist }) => (
          <Link
            href={ART_ROUTE(id)}
            key={id}
            className="rounded-lg overflow-hidden relative w-20 h-20"
          >
            <Image
              fill
              objectFit="cover"
              src={final_image_url}
              alt={`image by ${artist}`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default DashboardRecentArts;
