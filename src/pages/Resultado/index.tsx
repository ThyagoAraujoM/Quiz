import { Button, Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useQuestions } from "../../hooks/useQuestions";
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
  const {
    correctQuestionAndAnswer,
    userQuestionAndAnswer,
    setUserQuestionAndAnswer,
  } = useQuestions();
  const result: JSX.Element[] = [];

  useEffect(() => {
    let currentQuiz: any = localStorage.getItem("currentQuiz");
    if (userQuestionAndAnswer.length === 0) {
      let data = [];
      let currentQuizData = JSON.parse(currentQuiz);
      console.log(currentQuizData);
      for (let value in currentQuizData) {
        data.push({
          question: currentQuizData[value].question,
          answer: currentQuizData[value].user_answer,
        });
      }
      setUserQuestionAndAnswer(data);
    }
  }, []);
  console.log(userQuestionAndAnswer);
  function renderCorrectAndWorkQuestions() {
    let corrects = 0;
    let wrongs = 0;

    for (let value in correctQuestionAndAnswer) {
      if (
        correctQuestionAndAnswer[value].answer ===
        userQuestionAndAnswer[value].answer
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
    for (let value in correctQuestionAndAnswer) {
      if (
        correctQuestionAndAnswer[value].answer ===
        userQuestionAndAnswer[value].answer
      ) {
        result.push(
          <QuestionContainer key={value} sx={{ border: "solid 3px #13ca414e" }}>
            <p>{correctQuestionAndAnswer[value].question}</p>
            <AnswersGrid>
              <CorrectAnswer sx={{ border: "1px solid #00000075" }}>
                {correctQuestionAndAnswer[value].answer}
              </CorrectAnswer>
            </AnswersGrid>
          </QuestionContainer>
        );
      } else {
        result.push(
          <QuestionContainer key={value} sx={{ border: "solid 3px #ca13224e" }}>
            <p>{correctQuestionAndAnswer[value].question}</p>
            <AnswersGrid>
              <CorrectAnswer>
                {correctQuestionAndAnswer[value].answer}
              </CorrectAnswer>
              <WrongAnswer sx={{ border: "1px solid #00000075" }}>
                {userQuestionAndAnswer[value].answer}
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
    let date = new Date();
    let listOfDatesOfQuizzes: any = () => {
      let arrayOfQuizzes: any = [];
      let list: any = localStorage.getItem("listOfDatesOfQuizzes");
      if (list != null) {
        arrayOfQuizzes.push(JSON.parse(list));
        return arrayOfQuizzes;
      } else {
        return arrayOfQuizzes;
      }
    };

    for (let value in correctQuestionAndAnswer) {
      data.push({
        question: correctQuestionAndAnswer[value].question,
        correct_answer: correctQuestionAndAnswer[value].answer,
        user_answer: userQuestionAndAnswer[value].answer,
      });
    }
    listOfDatesOfQuizzes.push(
      `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    );
    // salvado data que quiz foi feito
    localStorage.setItem(
      "listOfDatesOfQuizzes",
      JSON.stringify(listOfDatesOfQuizzes)
    );
    // salvando quiz com data que foi feito
    localStorage.setItem(
      `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
      JSON.stringify(data)
    );
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
        <div>{show ? null : <div>{showResult()}aqqqqq</div>}</div>
      </div>
    </Container>
  );
}
