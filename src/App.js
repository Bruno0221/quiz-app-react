import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import { questionArray } from "./utils/InitialQuestions";
import { useState } from "react";

function App() {
  const [questions, setQuestions] = useState(questionArray);
  const [filter, setFilter] = useState("all");
  const bookmarkedQuestions = questions.filter(
    (question) => question.isBookmarked === true
  );

  function handleBookmarkQuestion(id) {
    setQuestions(
      questions.map((question) =>
        question.id === id
          ? { ...question, isBookmarked: !question.isBookmarked }
          : question
      )
    );
  }
  function handleFilterAll() {
    setFilter("all");
  }

  function handleFilterBookmarked() {
    setFilter("bookmarked");
  }

  const renderedQuestions = filter === "all" ? questions : bookmarkedQuestions;

  return (
    <>
      <Header />
      <main>
        {renderedQuestions.map((question) => {
          return (
            <Card
              key={question.id}
              question={question}
              onBookmarkQuestion={handleBookmarkQuestion}
            />
          );
        })}
      </main>
      <Footer
        onFilterAll={handleFilterAll}
        onFilterBookmarked={handleFilterBookmarked}
      />
    </>
  );
}

export default App;
