import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchCollections } from "../../redux/slices/collectionsSlice";

export function useTrendingCollections() {
  const dispatch = useAppDispatch();
  const collections = useAppSelector((state) => state.collections);

  useEffect(() => {
    (async function fetchData() {
      if (collections.loading !== "succeeded") {
        await dispatch(fetchCollections());
      }
    })();
  }, [dispatch, collections.loading]);
  return collections;
}
