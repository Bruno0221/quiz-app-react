import "./QuestionDialog.css";

export default function QuestionDialog({dialogOpen}) {
    const test = dialogOpen
  return (
    <dialog className="question-dialog" { {test} ? open: "" }>
      <article className="question-container">
        <form className="new-question-form" id="add-question-form">
          <div className="input-container">
            <textarea
              className="form-input"
              id="question"
              name="question"
              rows="3"
              cols="25"
            ></textarea>
            <label className="form-label" htmlFor="question">
              New Question:
            </label>
          </div>
          <div className="input-container">
            <textarea
              className="form-input"
              id="answer"
              name="answer"
              rows="3"
              cols="25"
            ></textarea>
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
      </article>
      <button
        className="question-button dialog-button"
        form="add-question-form"
      >
        Add Question
      </button>
      <button className="question-button dialog-button">Cancel</button>
    </dialog>
  );
}
