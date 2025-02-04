import { useForm } from "react-hook-form";
import * as yup from "yup";
import Header from "../../components/header/Header";
import './SignIn.scss';
import { useCallback} from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const useYupValidationResolver = validationSchema =>
  useCallback(
    async data => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false
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
                message: currentError.message
              }
            }),
            {}
          )
        };
      }
    },
    [validationSchema]
  );

const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

function SignIn() {
  const resolver = useYupValidationResolver(validationSchema);
  const { handleSubmit, register, formState, setError } = useForm({ resolver });
  const { errors } = formState;
  const navigate = useNavigate();

  const handleSignIn = async (data) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredential.user;
      console.log("User signed in:", user);
      alert('Sign-in successful!');
      localStorage.setItem('email', user.email); // збереження email в localStorage
      navigate('/'); // перенаправлення на головну сторінку
    } catch (error) {
      console.error("Error signing in:", error);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <Header />
      <main className="main">
        <h1 className="main__title">Sign In</h1>
        <form onSubmit={handleSubmit(handleSignIn)} className="main-form">
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
            type="password"
          />
          {errors.password && <div className="error-message">{errors.password.message}</div>}
          <button type="submit" className="main-form__btn">Send</button>
        </form>
      </main>
    </div>
  );
}

export default SignIn;