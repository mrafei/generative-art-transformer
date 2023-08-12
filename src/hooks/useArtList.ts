import type { IArtWork } from "@/types/artwork";
import { useCallback, useEffect, useRef, useState } from "react";
import artServices from "@/services/art";

export type ArtListHook = () => Array<IArtWork>;

const useArtList: ArtListHook = () => {
  const [arts, setArts] = useState<Array<IArtWork>>([]);
  const intervalRef = useRef();
  const fetchArts = useCallback(async () => {
    const artsList = await artServices.list();
    if (artsList?.arts) setArts(artsList.arts);
  }, []);

  useEffect(() => {
    fetchArts();
    const interval = setInterval(() => {
      fetchArts();
    }, 5000);
    return () => clearInterval(interval);
  }, [fetchArts]);
  return arts;
};
export default useArtList;
