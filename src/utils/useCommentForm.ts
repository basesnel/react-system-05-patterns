import { useBaseForm } from "./useBaseForm";

const useCommentForm = () => {
  const validate = (name: string, value: string) => {
    if (name === "comment" && value.length < 5) return "Comment is too short";
    return "";
  };

  return useBaseForm({ comment: "" }, validate);
};

export { useCommentForm };
