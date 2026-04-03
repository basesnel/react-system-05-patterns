import { useBaseForm } from "./useBaseForm";

const useLoginForm = () => {
  const validate = (name: string, value: string) => {
    if (name === "email" && !value.includes("@")) return "email is incorrect";
    if (name === "password" && value.length < 6) return "password is too short";
    return "";
  };

  return useBaseForm({ email: "", password: "" }, validate);
};

export { useLoginForm };
