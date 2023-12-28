import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import UserProfile from "./components/UserProfile/UserProfile";
import { questionArray } from "./utils/InitialQuestions";
import { useState } from "react";

function App() {
  const [questions, setQuestions] = useState(questionArray);
  const [render, setRender] = useState("all");
  const bookmarkedQuestions = questions.filter(
    (question) => question.isBookmarked === true
  );
  const renderedQuestions = render === "all" ? questions : bookmarkedQuestions;
  const currentPage = render === "all";

  function handleBookmarkQuestion(id) {
    setQuestions(
      questions.map((question) =>
        question.id === id
          ? { ...question, isBookmarked: !question.isBookmarked }
          : question
      )
    );
  }
  function handleRenderAll() {
    setRender("all");
  }

  function handleRenderBookmarked() {
    setRender("bookmarked");
  }
  function handleRenderProfile() {
    setRender("profile");
  }

  return (
    <>
      <Header />
      <main>
        {render === "profile" && <UserProfile />}

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
        render={render}
        onRenderAll={handleRenderAll}
        onRenderBookmarked={handleRenderBookmarked}
        onRenderProfile={handleRenderProfile}
      />
    </>
  );
}

export default App;
