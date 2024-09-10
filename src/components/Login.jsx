import { useRef, useState } from "react";

export default function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [formData, setFormData] = useState({
  //   email:'',
  //   password:''
  // });

  const [isInvalidEmail, setIsInvalidEmail] = useState(false);

  const email = useRef();
  const password = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted");
    // console.log("Email", formData.email);
    // console.log("Password", formData.password);
    const formData = {
      email: email.current.value,
      password: password.current.value,
    };
    console.log(formData);

    const isValidEmail = formData.email.includes("@");
    if (!isValidEmail) {
      setIsInvalidEmail(true);
      return;
    }

    setIsInvalidEmail(false);

    console.log("send http request...");
  };

  // const handleChangeEmail = (event) => {
  //   setEmail(event.target.value);
  // };

  // const handleChangePassword = (event) => {
  //   setPassword(event.target.value);
  // };

  // const handleChange = (identifier, value) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [identifier]: value,
  //   }));
  // };

  // const handleChange = (event) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [event.target.name]: event.target.value,
  //   }));
  // };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="input"
            name="email"
            // value={formData.email}
            // onChange={(event) => handleChange("email", event.target.value)}
            // onChange={(event) => handleChange(event)}
            ref={email}
          />
          <div className="control-error">
            {isInvalidEmail && <p>Please enter a valid email address!</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            // value={formData.password}
            // onChange={(event) => handleChange("password", event.target.value)}
            // onChange={(event) => handleChange(event)}
            ref={password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button
          /*type="submit" type="button"*/ className="button" /*onClick={handleSubmit}*/
        >
          Login
        </button>
      </p>
    </form>
  );
}
