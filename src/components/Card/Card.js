import "./Card.css";
import Bookmark from "../Bookmark/Bookmark";
import Tag from "../Tag/Tag";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function Card({ question, onBookmarkQuestion }) {
  const [answerHidden, setAnswerHidden] = useState(true);

  function handleShowAnswer() {
    setAnswerHidden(!answerHidden);
  }

  return (
    <article className="question-container">
      <Bookmark id={question.id} onBookmarkQuestion={onBookmarkQuestion} />
      <h2 className="question">{question.question}</h2>
      <button className="answer-button" onClick={handleShowAnswer}>
        {answerHidden ? "Show" : "Hide"} Answer
      </button>
      <p className={answerHidden ? "answer hidden" : "answer"}>
        {question.answer}
      </p>
      <ul className="tags" aria-label="question tags">
        {question.tags.map((tag) => (
          <Tag key={nanoid()} content={tag} />
        ))}
      </ul>
    </article>
  );
}
