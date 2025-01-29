import { useForm } from "react-hook-form";
import * as yup from "yup";
import Header from "../../components/header/Header";
import './SignUp.scss';
import { useCallback, useState, useEffect } from "react";
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  createUserWithEmailAndPassword 
} from 'firebase/auth';
import { firebaseConfig } from '../../firebase'; // Переконайтеся, що шлях правильний
import { useNavigate } from 'react-router-dom';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const useYupValidationResolver = validationSchema =>
  useCallback(
    async data => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {}
        };
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? "validation",
                message: currentError.message,
              },
            }),
            {}
          ),
        };
      }
    },
    [validationSchema]
  );

const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required(),
});

function SignUp() {
  const resolver = useYupValidationResolver(validationSchema);
  const { handleSubmit, register, formState, setError } = useForm({ resolver });
  const { errors } = formState;
  const navigate = useNavigate();

  const handleSignUp = async (data) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredential.user;
      console.log('User created successfully:', user);
      alert('User successfully created!');
      localStorage.setItem('email', user.email); // збереження email в localStorage
      navigate('/'); // перенаправлення на головну сторінку
    } catch (error) {
      console.error('Error creating user:', error);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <Header />
      <main className="main">
        <h1 className="main__title">Sign Up</h1>
        <form onSubmit={handleSubmit(handleSignUp)} className="main-form">
          <input
            {...register("email")}
            className="main-form__input"
            placeholder="Enter your email"
          />
          {errors.email && <div className="error-message">{errors.email.message}</div>}
          <input
            {...register("password")}
            className="main-form__input"
            placeholder="Enter your password"
          />
          {errors.password && <div className="error-message">{errors.password.message}</div>}
          <input
            {...register("confirmPassword")}
            className="main-form__input"
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && <div className="error-message">{errors.confirmPassword.message}</div>}
          <button type="submit" className="main-form__btn">Send</button>
        </form>
      </main>
    </div>
  );
}
export default SignUp;