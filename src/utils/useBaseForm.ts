import { useState, type ChangeEvent, type SubmitEvent } from "react";

type FormValues = Record<string, string>;

type ValidateFunction = (name: string, value: string) => string;

const useBaseForm = <T extends FormValues>(
  initialValues: T,
  validate?: ValidateFunction,
) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    if (validate) {
      setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
    }
  };

  const handleSubmit = (event: SubmitEvent, onSubmit: (values: T) => void) => {
    event.preventDefault();
    if (Object.values(errors).some((err) => err)) return;
    onSubmit(values);
  };

  return { values, errors, handleChange, handleSubmit };
};

export { useBaseForm };
