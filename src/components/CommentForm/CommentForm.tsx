import { useCommentForm } from "../../utils/useCommentForm";

const CommentForm = () => {
  const { values, errors, handleChange, handleSubmit } = useCommentForm();

  return (
    <form
      onSubmit={(e) =>
        handleSubmit(e, (data) => console.log("Comment:", data.comment))
      }
    >
      <textarea
        name="comment"
        placeholder="Comment"
        value={values.comment}
        onChange={handleChange}
      />
      {errors.comment && <span>{errors.comment}</span>}

      <button>Send</button>
    </form>
  );
};

export { CommentForm };
