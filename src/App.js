import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import UserProfile from "./components/UserProfile/UserProfile";
import { questionArray } from "./utils/InitialQuestions";
import { useState } from "react";

function App() {
  const [questions, setQuestions] = useState(questionArray);
  const [filter, setFilter] = useState("all");
  const bookmarkedQuestions = questions.filter(
    (question) => question.isBookmarked === true
  );
  const renderedQuestions = filter === "all" ? questions : bookmarkedQuestions;
  const currentPage = filter === "all";

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

  return (
    <>
      <Header />
      <main>
        <UserProfile />
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
        currentPage={currentPage}
        onFilterAll={handleFilterAll}
        onFilterBookmarked={handleFilterBookmarked}
      />
    </>
  );
}

export default App;
