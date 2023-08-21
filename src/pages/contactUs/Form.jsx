import {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from '../../components/modal/Modal';
import vectorImage from '../../assets/images/Vector.png'

const PostForm = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const initialValues = {
    name: '',
    email: '',
    post: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    post: Yup.string().required('`Post is required'),
  });

  const onSubmit = (e, {resetForm}) => {
    setIsRegistered(true);
    resetForm();

  };
  function closeModal(){
    setIsRegistered(false);
  }

  return (
    <div>
      <h2>ԿԱՊՆՎԵՔ ՄԵԶ ՀԵՏ ՀԻՄԱ</h2>

      <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ resetForm }) => (
        <Form>
          <div>
            <Field type="text" id="name" name="name" placeholder = 'Անուն'/>
            <ErrorMessage name="name" component="div"/>
          </div>

          <div>
            <Field type="email" id="email" name="email"  placeholder='Էլ․հասցե'/>
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <Field as="textarea" id="post" name="post" placeholder='Հաղորդագրություն'/>
            <ErrorMessage name="post" component="div" />
          </div>

          <button type="submit"><p className='btn_text'>ՈՒՂԱՐԿԵԼ</p></button>
        </Form>
      )}
    </Formik>
    {isRegistered && (
        <Modal onClose={closeModal}>
          <h2>ՇՆՈՐՀԱԿԱԼՈՒԹՅՈՒՆ</h2>
          <p>ՄԵՐ ՄԱՍՆԱԳԵՏԸ ԿՊԱՏԱՍԽԱՆԻ ՁԵԶ ԷԼ․ՓՈՍՏԻ ՄԻՋՈՑՈՎ</p>
          <div>
            <img src={vectorImage} alt="" />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default PostForm;
