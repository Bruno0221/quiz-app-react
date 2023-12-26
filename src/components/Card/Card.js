import "./Card.css";
import { BookmarkIcon } from "../../assets/bookmark-icon";
import { useState } from "react";

export default function Card() {
  const [answerHidden, setAnswerHidden] = useState(true);

  function showAnswer() {
    setAnswerHidden(!answerHidden);
  }

  return (
    <article className="question-container">
      <input
        id="bookmark-checkbox"
        className="bookmark-checkbox hidden"
        type="checkbox"
      />
      <label htmlFor="bookmark-checkbox">
        <BookmarkIcon className="bookmark" />
      </label>
      <h2 className="question">Question</h2>
      <button className="answer-button" onClick={showAnswer}>
        {answerHidden ? "Show" : "Hide"} Answer
      </button>
      <p className={answerHidden ? "answer hidden" : "answer"}>Answer</p>
      <ul className="tags" aria-label="question tags">
        <li className="tag">1</li>
        <li className="tag">2</li>
        <li className="tag">3</li>
      </ul>
    </article>
  );
}
