import artServices from "@/services/art";
import ArtPreview from "@/components/ArtPreview";

type ArtPageProps = { params: { id: string } };
const ArtPage = async (props: ArtPageProps) => {
  const { params } = props;
  const artId = params.id;
  const art = await artServices.get(artId);
  if (!art) return <div>art not found!</div>;
  return <ArtPreview {...art} />;
};
export default ArtPage;
