import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import openSeaApiInstance from "../../utils/axiosInstance/axiosInstance";
import { CollectionsSliceState, CollectionType } from "../../types/types";

const initialState: CollectionsSliceState = {
  collections: [],
  loading: "idle",
  error: null,
};

export const fetchCollections = createAsyncThunk<CollectionType[]>(
  "collections/fetchCollections",
  async (_, { rejectWithValue }) => {
    try {
      const response = await openSeaApiInstance.get(
        "/collections?chain=ethereum&order_by=seven_day_volume&limit=6"
      );
      return response.data.collections;
    } catch (error) {
      return rejectWithValue(`${error}`);
    }
  }
);

const collectionsSlice = createSlice({
  name: "collections",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCollections.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        fetchCollections.fulfilled,
        (state, action: PayloadAction<CollectionType[]>) => {
          state.collections = action.payload;
          state.loading = "succeeded";
        }
      )
      .addCase(fetchCollections.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload as string;
          state.loading = "failed";
        }
      });
  },
});

export default collectionsSlice.reducer;
