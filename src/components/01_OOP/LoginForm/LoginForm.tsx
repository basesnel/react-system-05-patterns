import { useLoginForm } from "../../../utils/useLoginForm";

const LoginForm = () => {
  const { values, errors, handleChange, handleSubmit } = useLoginForm();

  return (
    <form
      onSubmit={(e) => handleSubmit(e, (data) => console.log("Login:", data))}
    >
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
      />
      {errors.email && <span>{errors.email}</span>}

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={values.password}
        onChange={handleChange}
      />
      {errors.password && <span>{errors.password}</span>}

      <button>Log In</button>
    </form>
  );
};

export { LoginForm };
