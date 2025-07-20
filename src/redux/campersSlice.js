import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient } from '../services/api';

const initialFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async (filters, { rejectWithValue }) => {
    try {
      const params = { page: 1, limit: 4 };
      if (filters?.location) params.location = filters.location;
      if (filters?.form) params.form = filters.form;
      if (filters?.equipment) {
        filters.equipment.forEach(eq => {
          if (eq === 'ac') params.AC = true;
          if (eq === 'transmission') params.transmission = 'automatic';
          if (eq === 'kitchen') params.kitchen = true;
          if (eq === 'tv') params.TV = true;
          if (eq === 'shower') params.bathroom = true;
        });
      }
      const response = await apiClient.get('/campers', { params });
      return response.data.items; 
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loadMoreCampers = createAsyncThunk(
  'campers/loadMoreCampers',
  async ({ page, filters }, { rejectWithValue }) => {
    try {
      const params = { page, limit: 4 };
      if (filters?.location) params.location = filters.location;
      if (filters?.form) params.form = filters.form;
       if (filters?.equipment) {
        filters.equipment.forEach(eq => {
          if (eq === 'ac') params.AC = true;
          if (eq === 'transmission') params.transmission = 'automatic';
          if (eq === 'kitchen') params.kitchen = true;
          if (eq === 'tv') params.TV = true;
          if (eq === 'shower') params.bathroom = true;
        });
      }
      const response = await apiClient.get('/campers', { params });
      return response.data.items;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  'campers/fetchCamperById',
  async (id, { rejectWithValue }) => {
    try {
      // MockAPI може повертати об'єкт з items, якщо шукати по ID, тому перевіряємо
      const response = await apiClient.get(`/campers/${id}`);
      return Array.isArray(response.data.items) ? response.data.items[0] : response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    favorites: initialFavorites,
    currentCamper: null,
    isLoading: false,
    error: null,
    page: 1,
    hasMore: true,
    filters: {
      location: '',
      equipment: [],
      form: '',
    },
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const camper = action.payload;
      // ВИПРАВЛЕННЯ: Використовуємо camper.id для пошуку
      const index = state.favorites.findIndex(fav => fav.id === camper.id);
      if (index >= 0) {
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(camper);
      }
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
      state.page = 1;
      state.items = [];
      state.hasMore = true;
    },
    resetCurrentCamper: (state) => {
      state.currentCamper = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.page = 2;
        state.hasMore = action.payload.length === 4;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(loadMoreCampers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadMoreCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(...action.payload);
        state.page += 1;
        state.hasMore = action.payload.length === 4;
      })
      .addCase(loadMoreCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchCamperById.pending, (state) => {
        state.isLoading = true;
        state.currentCamper = null;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentCamper = action.payload;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { toggleFavorite, setFilters, resetCurrentCamper } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
