import "./NewQuestionForm.css";

export default function NewQuestionForm() {
  return (
    <article className="dialog-container">
      <form className="new-question-form" id="add-question-form">
        <div className="input-container">
          <textarea
            className="form-input"
            id="question"
            name="question"
          ></textarea>
          <label className="form-label" htmlFor="question">
            New Question:
          </label>
        </div>
        <div className="input-container">
          <textarea className="form-input" id="answer" name="answer"></textarea>
          <label className="form-label" htmlFor="answer">
            New Answer:
          </label>
        </div>
        <div className="input-container"></div>
        <input className="form-input" id="tag" type="text" name="tag"></input>
        <label className="form-label" htmlFor="tag">
          New Tag:
        </label>
      </form>
      <div className="dialog-button-container">
        <button className="dialog-button" form="add-question-form">
          Add Question
        </button>
        <button className="dialog-button">Cancel</button>
      </div>
    </article>
  );
}
