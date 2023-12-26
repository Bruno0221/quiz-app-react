import "./Card.css";
import Bookmark from "../Bookmark/Bookmark";
import Tag from "../Tag/Tag";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function Card({ id, question, answer, tags }) {
  const [answerHidden, setAnswerHidden] = useState(true);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [bookmarkedQuestions, setBookmarkedQuestions] = useState([]);

  function handleShowAnswer() {
    setAnswerHidden(!answerHidden);
  }

  function handleBookmarkQuestion(event) {
    event.target.checked && setIsBookmarked(!isBookmarked);
  }

  return (
    <article className="question-container">
      <Bookmark id={id} onBookmarkQuestion={handleBookmarkQuestion} />
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
