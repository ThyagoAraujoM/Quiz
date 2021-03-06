import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ContextContainer,
  HeaderStyled,
  ReturnButton,
} from "../../styles/geral";

import {
  AnswersGrid,
  ButtonContainer,
  CorrectAnswer,
  QuestionBox,
  QuestionsBox,
  ScoreContainer,
  WrongAnswer,
} from "./styles";

export default function Resultado() {
  const [show, setShow] = useState(false);
  const result: JSX.Element[] = [];
  const [currentQuiz, setCurrentQuiz] = useState<CurrentQuiz[]>([]);
  type CurrentQuiz = {
    question: string;
    correct_answer: string;
    user_answer: string;
  };

  useEffect(() => {
    let storageCurrentQuiz: any = localStorage.getItem("currentQuiz");
    setCurrentQuiz(JSON.parse(storageCurrentQuiz));
  }, []);

  function renderCorrectAndWorkQuestions() {
    let corrects = 0;
    let wrongs = 0;

    for (let value in currentQuiz) {
      if (
        currentQuiz[value].correct_answer === currentQuiz[value].user_answer
      ) {
        corrects++;
      } else {
        wrongs++;
      }
    }

    return (
      <ScoreContainer>
        <div className='c-score c-correct'>
          <h3>{corrects}</h3>
          <h4>Correct</h4>
        </div>
        <div className='c-score c-wrong'>
          <h3>{wrongs}</h3>
          <h4>Wrong</h4>
        </div>
      </ScoreContainer>
    );
  }

  function showResult() {
    for (let value in currentQuiz) {
      if (
        currentQuiz[value].correct_answer === currentQuiz[value].user_answer
      ) {
        result.push(
          <QuestionBox key={value} className={"c-correct-answer"}>
            <p>{currentQuiz[value].question}</p>
            <AnswersGrid>
              <CorrectAnswer sx={{ border: "2px solid #000000b5" }}>
                {currentQuiz[value].correct_answer}
              </CorrectAnswer>
            </AnswersGrid>
          </QuestionBox>
        );
      } else {
        result.push(
          <QuestionBox key={value} className={"c-wrong-answer"}>
            <p>{currentQuiz[value].question}</p>
            <AnswersGrid>
              <CorrectAnswer>{currentQuiz[value].correct_answer}</CorrectAnswer>
              <WrongAnswer sx={{ border: "2px solid #000000b5" }}>
                {currentQuiz[value].user_answer}
              </WrongAnswer>
            </AnswersGrid>
          </QuestionBox>
        );
      }
    }
    return result;
  }

  function saveCurrentQuiz() {
    let data = currentQuiz;

    let listOfDatesOfQuizzes: [] | any =
      localStorage.getItem("listOfDatesOfQuizzes") != null
        ? localStorage.getItem("listOfDatesOfQuizzes")
        : [];

    if (listOfDatesOfQuizzes[0] != null) {
      listOfDatesOfQuizzes = JSON.parse(listOfDatesOfQuizzes);
    }

    let date = new Date();
    let ActualDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

    if (
      listOfDatesOfQuizzes.find((value: string) => value === ActualDate) ===
      undefined
    ) {
      listOfDatesOfQuizzes.push(ActualDate);
    }
    // salvado data de quando o quiz foi feito
    localStorage.setItem(
      "listOfDatesOfQuizzes",
      JSON.stringify(listOfDatesOfQuizzes)
    );
    // salvando quiz com data que foi feito
    localStorage.setItem(ActualDate, JSON.stringify(data));
  }

  return (
    <ContextContainer>
      <HeaderStyled>
        <ReturnButton>
          <Link className={"c-link"} to='/'>
            Home
          </Link>
        </ReturnButton>
        <h1>Result</h1>
      </HeaderStyled>
      <div>
        {renderCorrectAndWorkQuestions()}
        <ButtonContainer>
          <Button
            variant='contained'
            onClick={() => {
              setShow(!show);
            }}>
            Show Questions
          </Button>
          <Button
            variant='contained'
            onClick={() => {
              saveCurrentQuiz();
            }}>
            Save Quiz
          </Button>
        </ButtonContainer>
        <QuestionsBox>{show ? showResult() : null}</QuestionsBox>
      </div>
    </ContextContainer>
  );
}
