import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import { questionArray } from "./utils/InitialQuestions";
import { useState } from "react";

function App() {
  const [questions, setQuestions] = useState(questionArray);
  return (
    <>
      <Header />
      <main>
        {questions.map((question) => {
          return (
            <Card
              key={question.id}
              id={question.id}
              question={question.question}
              answer={question.answer}
              tags={question.tags}
            />
          );
        })}
      </main>
      <Footer />
    </>
  );
}

export default App;
