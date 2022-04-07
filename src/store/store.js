import { configureStore } from '@reduxjs/toolkit';

import announcementsReducer from './slices/announcementsSlice';

export const store = configureStore({
  reducer: {
    announcements: announcementsReducer,
  },
});
