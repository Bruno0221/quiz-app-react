import "./CounterSection.css";
import BookmarkIcon from "../../assets/bookmark.svg";
import QuestionmarkIcon from "../../assets/questionmark-icon.svg";
import Counter from "../Counter/Counter";

export default function CounterSection({
  allQuestionCount,
  bookmarkedQuestionCount,
}) {
  return (
    <div className="about-counter">
      <Counter
        src={QuestionmarkIcon}
        alt="Question Counter"
        count={allQuestionCount}
      />
      <Counter
        src={BookmarkIcon}
        alt="Bookmark Counter"
        count={bookmarkedQuestionCount}
      />
    </div>
  );
}
