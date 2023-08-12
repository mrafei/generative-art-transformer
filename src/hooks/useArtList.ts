import type { IArtWork } from "@/types/artwork";
import { useCallback, useEffect, useState } from "react";
import artServices from "@/services/art";

export type ArtListHook = () => Array<IArtWork>;

const useArtList: ArtListHook = () => {
  const [arts, setArts] = useState<Array<IArtWork>>([]);

  const fetchArts = useCallback(async () => {
    const artsList = await artServices.list();
    if (artsList?.arts) setArts(artsList.arts);
  }, []);

  useEffect(() => {
    fetchArts();
  }, [fetchArts]);
  return arts;
};
export default useArtList;
