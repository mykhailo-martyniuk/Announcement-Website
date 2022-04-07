import { createSlice } from '@reduxjs/toolkit';
import { fetchAnnouncement } from '../../api';

const initialState = {
  data: [],
};

export const announcementsSlice = createSlice({
  name: 'announcements',
  initialState,
  reducers: {
    addAnnouncement: (state, action) => {
      if (action.payload.title && action.payload.description) {
        state.data.push({
          ...action.payload,
          dateAdded: new Date(Date.now()).toDateString(),
          id: state.data.length + 2,
        });
        console.log('success');
      }
    },

    loadAnnouncements: (state) => {
      console.log('fff', fetchAnnouncement());
      state.data = fetchAnnouncement();
    },

    editAnnouncement: (state, action) => {
      const index = state.data.findIndex(
        (el) => el.id.toString() === action.payload.id
      );
      state.data.splice(index, 1, action.payload);
    },

    deleteAnnouncement: (state, action) => {
      console.log(action.payload);
      state.data = state.data.filter(
        (el) => el.id.toString() !== action.payload.toString()
      );
    },
  },
});

export const {
  addAnnouncement,
  loadAnnouncements,
  editAnnouncement,
  deleteAnnouncement,
} = announcementsSlice.actions;

export default announcementsSlice.reducer;
