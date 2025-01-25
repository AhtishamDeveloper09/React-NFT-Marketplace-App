import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import { useEffect } from "react";
import { fetchNftsByCollection } from "../../redux/slices/nftsByCollectionSlice";

export function useCollection({ limit }: { limit: number }) {
  const { collectionSlug } = useParams();
  const dispatch = useAppDispatch();
  const nfts = useAppSelector((state) => state.nftsByCollection);

  useEffect(() => {
    (async function () {
      await dispatch(
        fetchNftsByCollection({
          collection_slug: collectionSlug || "azukielementals",
          limit: limit,
        })
      );
    })();
  }, [dispatch, limit, collectionSlug]);
  return nfts;
}
