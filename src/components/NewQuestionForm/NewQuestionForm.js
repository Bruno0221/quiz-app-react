import TextInput from "../TextInput/TextInput";
import "./NewQuestionForm.css";

export default function NewQuestionForm({ onToggleDialog, onAddQuestion }) {
  function handleFormData(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddQuestion(data);
    event.target.reset();
    onToggleDialog();
  }
  return (
    <article className="dialog-container">
      <form
        className="new-question-form"
        id="add-question-form"
        onSubmit={handleFormData}
      >
        <TextInput name="question" content="New Question:" />
        <TextInput name="answer" content="New Answer:" />

        <div className="input-container"></div>
        <input className="form-input" id="tag" type="text" name="tag"></input>
        <label className="form-label" htmlFor="tag">
          New Tag:
        </label>
        <div className="dialog-button-container">
          <button className="dialog-button" type="submit">
            Add Question
          </button>
          <button className="dialog-button" onClick={onToggleDialog}>
            Cancel
          </button>
        </div>
      </form>
    </article>
  );
}
