import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { axiosInstance } from "@/services/axiosInstance";

const getErrorMessage = (error) => {
  error?.response.data?.message || error?.message || "Something went wrong ";
};

export const trackParcelThunk = createAsyncThunk(
  "parcels/track",
  async (trackingId, thunkApi) => {
    try {
      const { data } = await axiosInstance.get(`/parcels/track/${trackingId}`);
      toast.success("parcel found");
      return data;
    } catch (error) {
      const message = getErrorMessage(error);
      toast.error(message);
      return thunkApi.rejectWithValue(message);
    }
  },
);

export const calculateCostThunk = createAsyncThunk(
  "parcels/calculateConst",
  async (trackingId, thunkApi) => {
    try {
      const { data } = await axiosInstance.get(
        `/parcels/calculate-cost`,
        payload,
      );
      toast.success("cost calculated successfully");
      return data;
    } catch (error) {
      const message = getErrorMessage(error);
      toast.error(message);
      return thunkApi.rejectWithValue(message);
    }
  },
);

const initialState = {
  trackParcel: null,
  trackLoading: false,
  trackError: null,

  costQuote: null,
  costLoading: false,
  costError: null,
};

const parcelSlice = createSlice({
  name: "parcels",
  initialState,
  reducers: {
    clearTrack: (state) => {
      state.trackParcel = null;
      state.trackError = null;
    },
    clearCost: (state) => {
      state.costQuote = null;
      state.costError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(trackParcelThunk.pending, (state) => {
        state.trackLoading = true;
        state.trackError = null;
        state.trackParcel = null;
      })
      .addCase(trackParcelThunk.fulfilled, (state, action) => {
        state.trackLoading = false;
        state.trackParcel = action.payload;
      })
      .addCase(trackParcelThunk.rejected, (state, action) => {
        state.trackLoading = false;
        state.trackError = action.payload || "Failed to track parcel";
      })
      .addCase(calculateCostThunk.pending, (state) => {
        state.costLoading = true;
        state.costError = null;
        state.costQuote = null;
      })
      .addCase(calculateCostThunk.fulfilled, (state, action) => {
        state.costLoading = false;
        state.costQuote = action.payload;
      })
      .addCase(calculateCostThunk.rejected, (state, action) => {
        state.costLoading = false;
        state.costError = action.payload || "Failed to calculate cost";
      });
  },
});

export const { clearCost, clearTrack } = parcelSlice.actions;
export default parcelSlice.reducer;
