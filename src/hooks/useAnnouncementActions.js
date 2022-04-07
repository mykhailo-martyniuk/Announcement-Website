import { useState, useEffect } from 'react';
import { deleteAnnouncement } from '../store/slices/announcementsSlice';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const useAnnouncementActions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickAnnouncementHandler = (e, id) => {
    e.stopPropagation();
    navigate(`/announcement/${id}`);
  };

  const onClickDeleteHandler = (e, id) => {
    e.stopPropagation();

    dispatch(deleteAnnouncement(id));
    navigate('/');
  };

  const onClickEditHandler = (e, id) => {
    e.stopPropagation();

    navigate(`/edit-announcement/${id}`);
  };

  return {
    onClickAnnouncementHandler,
    onClickDeleteHandler,
    onClickEditHandler,
  };
};

export default useAnnouncementActions;
