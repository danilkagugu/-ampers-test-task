import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCamperById, getCampersApi } from "../../services/advetrs";

export const getCampers = createAsyncThunk(
  "campers/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getCampersApi();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getCamperID = createAsyncThunk(
  "campers/getById",
  async (id, { rejectWithValue }) => {
    try {
      const data = await getCamperById(id);
      return data._id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
