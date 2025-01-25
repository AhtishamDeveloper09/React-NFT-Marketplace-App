import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useEffect } from "react";
import { fetchNftDetails } from "../../redux/slices/nftDetailsSlice";

export function useNftDetails() {
  const { collection, contract, identifier } = useParams();
  const dispatch = useAppDispatch();
  const { nft, loading, error } = useAppSelector((state) => state.nftDetails);

  useEffect(() => {
    (async function () {
      await dispatch(
        fetchNftDetails({
          contract,
          identifier,
        })
      );
    })();
  }, [dispatch, collection, contract, identifier]);
  return { nft, loading, error, collection };
}
