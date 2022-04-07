/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import { useDispatch } from 'react-redux';
import { loadAnnouncements } from './store/slices/announcementsSlice';
import { Route, Routes, useLocation } from 'react-router';
import AddPage from './pages/AddPage/AddPage';
import EditPage from './pages/EditPage/EditPage';
import AnnouncementPage from './pages/AnnouncementPage/AnnouncementPage';
import Backdrop from './components/Backdrop/Backdrop';
import useMediaQuery from './hooks/useMediaQuery';
import { tabletSize } from './consts/layout';
import FoundPage from './pages/FoundPage/FoundPage';

function App() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const isPhone = useMediaQuery(`(max-width: ${tabletSize}px)`);
  useEffect(() => {
    if (!isPhone) setIsOpen(false);
  }, [isPhone]);

  const getInitialData = () => {
    dispatch(loadAnnouncements());
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    getInitialData();
  }, []);

  const onClickMenuHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App">
      <Header onClickMenu={onClickMenuHandler} />

      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/announcement/:id'} element={<AnnouncementPage />} />
        <Route path={'/new-announcement'} element={<AddPage />} />
        <Route path={'/edit-announcement/:id'} element={<EditPage />} />
        <Route path={'/found-announcements/:query'} element={<FoundPage />} />
      </Routes>

      {isOpen && <Backdrop />}
    </div>
  );
}

export default App;
