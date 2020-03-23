import React, { useContext } from "react";
import { signUpWithEmailAndPassword } from "./services";
import { Context, Provider } from "../../store/reducer";
import withProvider from "../../store/WithProvider";
import { setTokenAndUser } from "../../store/actions";
import { RouteComponentProps } from "react-router-dom";

const SignUp: React.FC<RouteComponentProps> = props => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, dispatch] = useContext(Context);
  const handleSignUp = async (e: any) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      const { data } = await signUpWithEmailAndPassword(email.value, password.value);
      dispatch(setTokenAndUser(data));
      props.history.push("/merinfo");
    } catch (err) {
      console.error("Kunde inte registerar");
    }
    console.log(email.value, password.value);
  };

  return (
    <div data-testid="container-signup">
      <h1>Quarantine Helper</h1>
      <form onSubmit={handleSignUp}>
        <label>
          email
          <input type="email" name="email" id="email-input" />
        </label>
        <label>
          lösenord
          <input type="password" name="password" id="password-input" />
        </label>
        <button type="submit">Registrera</button>
      </form>
    </div>
  );
};

export default withProvider(Provider)(SignUp);
