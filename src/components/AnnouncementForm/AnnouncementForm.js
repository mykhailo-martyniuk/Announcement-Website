/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx, css } from '@emotion/react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import TextInput from '../commons/TextInput/TextInput';
import Button from '../commons/Button/Button';
import {
  buttonCancelStyles,
  buttonSubmitStyles,
  formStyle,
  inputStyles,
} from './styles';
import { useDispatch } from 'react-redux';
import {
  addAnnouncement,
  editAnnouncement,
} from '../../store/slices/announcementsSlice';
import { useNavigate } from 'react-router';
import { Card } from '../commons/styled/Card';

const validationSchema = yup.object({
  title: yup
    .string('Title is required')
    .min(1, 'Title is required')
    .required('Title is required'),
  description: yup
    .string('Description is required')
    .min(1, 'Description is required')
    .required('Description is required'),
});

const AnnouncementForm = ({
  title = '',
  description = '',
  dateAdded = '',
  id = '',
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isEdit = !!(title && description);

  const formik = useFormik({
    initialValues: {
      title: title,
      description: description,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (isEdit) {
        dispatch(editAnnouncement({ ...values, dateAdded, id }));
        navigate('/');
      } else {
        dispatch(addAnnouncement({ ...values }));
        navigate('/');
      }
    },
  });

  const cancelHandler = () => {
    formik.resetForm();
  };

  return (
    <>
      <Card
        css={css`
          padding: 60px 0;
        `}
      >
        <form css={formStyle} onSubmit={formik.handleSubmit}>
          <label htmlFor="title">Title</label>
          <TextInput
            fullWidth
            id="title"
            name="title"
            label="Title"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            styles={inputStyles}
          />
          <label htmlFor="description">Description</label>
          <TextInput
            fullWidth
            id="description"
            name="description"
            label="Description"
            type="textarea"
            value={formik.values.description}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            styles={inputStyles}
          />
          {isEdit && formik.dirty && (
            <Button
              type="button"
              styles={buttonCancelStyles}
              onClick={cancelHandler}
            >
              Cancel
            </Button>
          )}
          <Button
            type="submit"
            styles={buttonSubmitStyles}
            disabled={!(formik.isValid && formik.dirty)}
          >
            Submit
          </Button>
        </form>
      </Card>
    </>
  );
};

export default AnnouncementForm;
