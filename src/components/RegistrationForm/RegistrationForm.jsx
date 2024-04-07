import { useState } from 'react';
import { useDispatch } from 'react-redux';
import googleIcon from '../../icons/Google.png';
import { register } from '../../redux/Auth/operations';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import {
  FormContainer,
  FormForm,
  FormAdvice,
  FormAdviceSecond,
  GoogleButton,
  GoogleText,
  FormLabel,
  FormInput,
  FormButtons,
  FormButton,
  ErrorMessage,
  ErrorStar,
} from '../RegistrationForm/RegistrationForm.styled';
export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [emptyNameField, setEmptyNameField] = useState(false);
  const [emptyEmailField, setEmptyEmailField] = useState(false);
  const [emptyPasswordField, setEmptyPasswordField] = useState(false);

  const handleRegistration = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (name === '') {
      setEmptyNameField(true);
    } else {
      setEmptyNameField(false);
    }

    if (email === '') {
      setEmptyEmailField(true);
    } else {
      setEmptyEmailField(false);
    }

    if (password === '') {
      setEmptyPasswordField(true);
    } else {
      setEmptyPasswordField(false);
    }
    if (name !== '' && email !== '' && password !== '') {
      dispatch(register({ name, email, password }))
        .unwrap()
        .then(response => {
          form.reset();
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Registered successfully!',
          });
          form.reset();
          navigate('/login');
        })
        .catch(error => {
          Swal.fire({
            icon: 'error',
            title: 'Registration Error',
            text: `${email} is already used`,
          });
        });
    }
  };
  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <FormContainer>
      <FormAdvice>You can log in with your Google Account:</FormAdvice>
      <GoogleButton>
        <img src={googleIcon} alt="Google Icon" />
        <GoogleText>Google</GoogleText>
      </GoogleButton>
      <FormAdviceSecond>
        Or log in using an email and password, after registering:
      </FormAdviceSecond>
      <FormForm onSubmit={handleRegistration}>
        <FormLabel htmlFor="registrationUsername">
          {' '}
          {emptyNameField && <ErrorStar>*</ErrorStar>}Name:{' '}
        </FormLabel>
        <FormInput
          id="registrationUsername"
          name="name"
          placeholder="Enter your name"
          autoComplete="name"
        />{' '}
        {emptyNameField && <ErrorMessage>This is required field</ErrorMessage>}
        <FormLabel htmlFor="registrationEmail">
          {' '}
          {emptyEmailField && <ErrorStar>*</ErrorStar>}Email:{' '}
        </FormLabel>
        <FormInput
          id="registrationEmail"
          name="email"
          type="email"
          placeholder="your@email.com"
          autoComplete="email"
        />{' '}
        {emptyEmailField && <ErrorMessage>This is required field</ErrorMessage>}
        <FormLabel htmlFor="registrationPassword">
          {' '}
          {emptyPasswordField && <ErrorStar>*</ErrorStar>}Password:
        </FormLabel>
        <FormInput
          id="registrationPassword"
          name="password"
          type="password"
          placeholder="enter password"
        />
        {emptyPasswordField && (
          <ErrorMessage>This is required field</ErrorMessage>
        )}
        <FormButtons>
          <FormButton type="button" onClick={handleLoginClick}>
            LOG IN
          </FormButton>{' '}
          <FormButton type="submit">REGISTRATION</FormButton>
        </FormButtons>
      </FormForm>
    </FormContainer>
  );
};

// import css from './RegistrationForm.module.css';
// import { useDispatch } from 'react-redux';
// import googleIcon from '../../icons/Google.png';
// import { register } from '../../redux/Auth/operations';
// import { useNavigate } from 'react-router-dom';

// export const RegistrationForm = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleRegistration = event => {
//     event.preventDefault();

//     const form = event.target;
//     const name = form.elements.name.value;
//     const email = form.elements.email.value;
//     const password = form.elements.password.value;

//     dispatch(register({ name, email, password }));
//     form.reset();
//   };
//   const handleLoginClick = () => {
//     navigate('/login');
//   };
//   return (
//     <div className={css.form}>
//       <p className={css.form__advice}>
//         You can log in with your Google Account:
//       </p>
//       <button className={css.form__googleButton}>
//         <img
//           className={css.form__googleIcon}
//           src={googleIcon}
//           alt="Google Icon"
//         />
//         <span className={css.form__googleText}>Google</span>
//       </button>
//       <p className={css.form__second}>
//         Or log in using an email and password, after registering:
//       </p>
//       <form className={css.form__form} onSubmit={handleRegistration}>
//         <label htmlFor="registrationUsername" className={css.form__label}>
//           Name:{' '}
//         </label>
//         <input
//           id="registrationUsername"
//           className={css.form__input}
//           name="name"
//           placeholder="Enter your name"
//           autoComplete="name"
//         ></input>
//         <label htmlFor="registrationEmail" className={css.form__label}>
//           Email:{' '}
//         </label>
//         <input
//           id="registrationEmail"
//           className={css.form__input}
//           name="email"
//           type="email"
//           placeholder="your@email.com"
//           autoComplete="email"
//         ></input>
//         <label htmlFor="registrationPassword" className={css.form__label}>
//           Password:
//         </label>
//         <input
//           id="registrationPassword"
//           className={css.form__input}
//           name="password"
//           type="password"
//           placeholder="enter password"
//         ></input>
//         <div className={css.form__buttons}>
//           <button
//             className={css.form__button}
//             type="button"
//             onClick={handleLoginClick}
//           >
//             LOG IN
//           </button>{' '}
//           <button className={css.form__button} type="submit">
//             REGISTRATION
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };
