import artServices from "@/services/art";
import ArtPreview from "@/components/ArtPreview";
import type { FC } from "react";

type ArtPageProps = { params: { id: string } };
const ArtPage: FC<ArtPageProps> = async ({ params }) => {
  const artId = params.id;
  const art = await artServices.get(artId);
  if (!art) return <div>art not found!</div>;
  return <ArtPreview {...art} />;
};
export default ArtPage;
