import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import CardSection from "./components/CardSection/CardSection";
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

  function handleToggleDarkMode() {
    document.body.classList.toggle("other-theme");
  }

  return (
    <>
      <Header />
      <main>
        {render === "all" || render === "bookmarked" ? (
          // TODO Bookmarks are not checked after loading profile
          <CardSection
            renderedQuestions={renderedQuestions}
            onBookmarkQuestion={handleBookmarkQuestion}
          />
        ) : (
          <UserProfile
            allQuestionCount={questions.length}
            bookmarkedQuestionCount={bookmarkedQuestions.length}
            onToggleDarkMode={handleToggleDarkMode}
          />
        )}
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
