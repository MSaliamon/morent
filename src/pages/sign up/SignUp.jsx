import { useForm } from "react-hook-form";
import * as yup from "yup";
import Header from "../../components/header/Header";
import './SignUp.scss';
import { useCallback, useEffect, useState } from "react";
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  fetchSignInMethodsForEmail, 
  createUserWithEmailAndPassword 
} from 'firebase/auth';
import { firebaseConfig } from '../../firebase'; // Переконайтеся, що шлях правильний
import { useNavigate } from 'react-router-dom';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const useYupValidationResolver = (validationSchema) =>
  useCallback(
    async (data) => {
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
  name: yup.string().required(),
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
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name } = event.target;
    if (errors[name]) {
      setError(name, undefined);
    }
  };

  const handleSignUp = async (data) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      console.log('User created successfully:', userCredential.user);
      alert('User successfully created!');
      setUser(userCredential.user);
      localStorage.setItem('username', data.name);
      navigate('/'); // перенаправити юзера на основну сторінку
    } catch (error) {
      console.error('Error creating user:', error);
      alert(`Error: ${error.message}`);
    }
  };

  useEffect(() => {
    const checkUser = async () => {
      const user = auth.currentUser;
      if (user) {
        setUser(user);
      }
    };
    checkUser();
  }, []);

  return (
    <>
      <Header username={user ? user.email : localStorage.getItem('username')} user={user} />
      <main className="main">
        <h1 className="main__title">Sign Up</h1>
        {user ? (
          <></>
        ) : (
          <form onSubmit={handleSubmit(handleSignUp)} className="main-form">
            <input
              {...register("name")}
              onChange={handleInputChange}
              className="main-form__input"
              placeholder="Enter your name"
            />
            {errors.name && (
              <div className="error-message">{errors.name.message}</div>
            )}
            <input
              {...register("email")}
              onChange={handleInputChange}
              className="main-form__input"
              placeholder="Enter your email"
            />
            {errors.email && (
              <div className="error-message">{errors.email.message}</div>
            )}
            <input
              {...register("password")}
              onChange={handleInputChange}
              className="main-form__input"
              placeholder="Enter your password"
            />
            {errors.password && (
              <div className="error-message">{errors.password.message}</div>
            )}
            <input
              {...register("confirmPassword")}
              onChange={handleInputChange}
              className="main-form__input"
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <div className="error-message">{errors.confirmPassword.message}</div>
            )}
            <button type="submit" className="main-form__btn">
              Send
            </button>
          </form>
        )}
      </main>
    </>
  );
}

export default SignUp;
export { auth, app };