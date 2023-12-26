import "./Card.css";
import { BookmarkIcon } from "../../assets/bookmark-icon";
import Tag from "../Tag/Tag";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function Card({ question, answer, tags }) {
  const [answerHidden, setAnswerHidden] = useState(true);

  function handleShowAnswer() {
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
      <h2 className="question">{question}</h2>
      <button className="answer-button" onClick={handleShowAnswer}>
        {answerHidden ? "Show" : "Hide"} Answer
      </button>
      <p className={answerHidden ? "answer hidden" : "answer"}>{answer}</p>
      <ul className="tags" aria-label="question tags">
        {tags.map((tag) => (
          <Tag key={nanoid()} content={tag} />
        ))}
      </ul>
    </article>
  );
}
