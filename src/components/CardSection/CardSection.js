import Card from "../Card/Card";

export default function CardSection({ renderedQuestions, onBookmarkQuestion }) {
  return (
    <>
      {renderedQuestions.map((question) => {
        return (
          <Card
            key={question.id}
            question={question}
            onBookmarkQuestion={onBookmarkQuestion}
          />
        );
      })}
    </>
  );
}
