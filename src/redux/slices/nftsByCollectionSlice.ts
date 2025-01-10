import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import openSeaApiInstance from "../../utils/axiosInstance/axiosInstance";
import { NftsByCollectionSliceState, NftType } from "../../types/types";

const initialState: NftsByCollectionSliceState = {
  nfts: [],
  loading: "idle",
  error: null,
};

export const fetchNftsByCollection = createAsyncThunk<
  NftType[],
  { collection_slug: string; limit: number }
>(
  "nftsByCollection/fetchNftsByCollection",
  async ({ collection_slug, limit }, { rejectWithValue }) => {
    try {
      const response = await openSeaApiInstance.get(
        `/collection/${collection_slug}/nfts?limit=${limit}`
      );
      return response.data.nfts;
    } catch (error) {
      return rejectWithValue(`${error}`);
    }
  }
);

const nftsByCollectionSlice = createSlice({
  name: "nftsByCollection",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNftsByCollection.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        fetchNftsByCollection.fulfilled,
        (state, action: PayloadAction<NftType[]>) => {
          state.nfts = action.payload;
          state.loading = "succeeded";
        }
      )
      .addCase(fetchNftsByCollection.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload as string;
          state.loading = "failed";
        }
      });
  },
});

export default nftsByCollectionSlice.reducer;
