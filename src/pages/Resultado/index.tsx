import { Button, Container } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeaderStyled } from "../Home/styles";
import {
  AnswersGrid,
  ButtonContainer,
  CorrectAnswer,
  QuestionContainer,
  ScoreContainer,
  WrongAnswer,
} from "./styles";

export default function Resultado() {
  const [show, setShow] = useState(false);

  const result: JSX.Element[] = [];

  type CurrentQuiz = {
    question: string;
    correct_answer: string;
    user_answer: string;
  };

  let currentQuiz: CurrentQuiz[] = [];
  let value: any = localStorage.getItem("currentQuiz");
  currentQuiz = JSON.parse(value);

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
          <h4>Acertos</h4>
        </div>
        <div className='c-score c-wrong'>
          <h3>{wrongs}</h3>
          <h4>Erros</h4>
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
          <QuestionContainer key={value} sx={{ border: "solid 3px #13ca414e" }}>
            <p>{currentQuiz[value].question}</p>
            <AnswersGrid>
              <CorrectAnswer sx={{ border: "1px solid #00000075" }}>
                {currentQuiz[value].correct_answer}
              </CorrectAnswer>
            </AnswersGrid>
          </QuestionContainer>
        );
      } else {
        result.push(
          <QuestionContainer key={value} sx={{ border: "solid 3px #ca13224e" }}>
            <p>{currentQuiz[value].question}</p>
            <AnswersGrid>
              <CorrectAnswer>{currentQuiz[value].correct_answer}</CorrectAnswer>
              <WrongAnswer sx={{ border: "1px solid #00000075" }}>
                {currentQuiz[value].user_answer}
              </WrongAnswer>
            </AnswersGrid>
          </QuestionContainer>
        );
      }
    }
    return result;
  }

  function saveCurrentQuiz() {
    let data = [];
    for (let value in currentQuiz) {
      data.push({
        question: currentQuiz[value].question,
        correct_answer: currentQuiz[value].correct_answer,
        user_answer: currentQuiz[value].user_answer,
      });
    }

    let listOfDatesOfQuizzes: [] | any =
      localStorage.getItem("listOfDatesOfQuizzes") != null
        ? localStorage.getItem("listOfDatesOfQuizzes")
        : [];

    if (listOfDatesOfQuizzes[0] != null) {
      listOfDatesOfQuizzes = JSON.parse(listOfDatesOfQuizzes);
    }

    console.log(listOfDatesOfQuizzes);
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
    <Container>
      <HeaderStyled>
        <Link to='/'>Home</Link>
        <h1>Resultado</h1>
      </HeaderStyled>
      <div>
        {renderCorrectAndWorkQuestions()}
        <ButtonContainer>
          <Button
            variant='contained'
            onClick={() => {
              setShow(!show);
            }}>
            Mostrar Perguntas
          </Button>
          <Button
            variant='contained'
            onClick={() => {
              saveCurrentQuiz();
            }}>
            Salvar Quiz
          </Button>
        </ButtonContainer>
        <div>{show ? <div>{showResult()}</div> : null}</div>
      </div>
    </Container>
  );
}
