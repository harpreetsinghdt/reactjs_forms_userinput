import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import useInput from "../hooks/useInput.js";

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
    initialError: emailInitialError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
    initialError: passwordInitialError,
  } = useInput("", (value) => hasMinLength(value, 6));

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });

  // const [formEdit, setFormEdit] = useState({
  //   email: false,
  //   password: false,
  // });

  // const isInvalidEmail = formEdit.email && !formData.email.includes("@");
  // const isInvalidPassword =
  //   formEdit.password && formData.password.trim().length < 6;

  // const isInvalidEmail =
  //   formEdit.email && !isEmail(formData.email) && !isNotEmpty(formData.email);
  // const isInvalidPassword =
  //   formEdit.password && !hasMinLength(formData.password, 6);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (emailInitialError || passwordInitialError) {
      console.log("Please fill the form!");
      return;
    }
    if (emailHasError || passwordHasError) {
      return;
    }
    console.log("form submitted");
    // console.log("Email", formData.email);
    // console.log("Password", formData.password);
    console.log(emailValue, passwordValue);
  };

  const handleReset = () => {
    setFormData({
      email: false,
      password: false,
    });
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
  //   // setFormEdit((prevData) => ({
  //   //   ...prevData,
  //   //   [event.target.name]: false,
  //   // }));
  //   handleblur(event, false);
  // };

  // const handleblur = (event, type = true) => {
  //   setFormEdit((prevData) => ({
  //     ...prevData,
  //     [event.target.name]: type,
  //   }));
  //   console.log(event.target.name);
  //   console.log(event.target.value);
  //   console.log(formEdit);
  // };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="email"
          id="email"
          type="text"
          name="email"
          value={emailValue}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          error={emailHasError && "Please enter a valid email address!"}
          autoComplete="on"
        />
        {/* <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            // onChange={(event) => handleChange("email", event.target.value)}
            onChange={(event) => handleChange(event)}
            onBlur={(event) => handleblur(event)}
          />
          <div className="control-error">
            {isInvalidEmail && <p>Please enter a valid email address!</p>}
          </div>
        </div> */}

        <Input
          label="password"
          id="password"
          type="password"
          name="password"
          value={passwordValue}
          // onChange={(event) => handleChange("password", event.target.value)}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          error={
            passwordHasError && "Please enter a valid password (min length 6)!"
          }
          autoComplete="on"
        />
        {/* <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            // onChange={(event) => handleChange("password", event.target.value)}
            onChange={(event) => handleChange(event)}
          />
          {/* <div className="control-error">
            {isInvalidEmail && <p>Please enter a valid email address!</p>}
          </div> /}
        </div> */}
      </div>

      <p className="form-actions">
        <button
          type="button"
          className="button button-flat"
          onClick={handleReset}
        >
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
