import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import openSeaApiInstance from "../../utils/axiosInstance/axiosInstance";
import { NftDetailsSliceState, NftDetailsType } from "../../types/types";

const initialState: NftDetailsSliceState = {
  nft: null,
  loading: "idle",
  error: null,
};

export const fetchNftDetails = createAsyncThunk<
  NftDetailsType,
  { contract: string | undefined; identifier: string | undefined }
>(
  "nftDetails/fetchNftDetails",
  async ({ contract, identifier }, { rejectWithValue }) => {
    try {
      const response = await openSeaApiInstance.get(
        `/chain/ethereum/contract/${contract}/nfts/${identifier}`
      );
      return response.data.nft;
    } catch (error) {
      return rejectWithValue(`${error}`);
    }
  }
);

const nftDetailsSlice = createSlice({
  name: "nftDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNftDetails.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        fetchNftDetails.fulfilled,
        (state, action: PayloadAction<NftDetailsType>) => {
          state.nft = action.payload;
          state.loading = "succeeded";
        }
      )
      .addCase(fetchNftDetails.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload as string;
          state.loading = "failed";
        }
      });
  },
});

export default nftDetailsSlice.reducer;
