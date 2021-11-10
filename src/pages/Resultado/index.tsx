import { Button, Container } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuestions } from "../../hooks/useQuestions";
import { HeaderStyled } from "../Home/styles";
import {
  AnswersGrid,
  CorrectAnswer,
  QuestionContainer,
  ScoreContainer,
  WrongAnswer,
} from "./styles";

export default function Resultado() {
  const [show, setShow] = useState(false);
  const { correctQuestionAndAnswer, userQuestionAndAnswer } = useQuestions();

  const result: JSX.Element[] = [];

  if (userQuestionAndAnswer.length == 0) {
    console.log("nada");
  }
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
          <QuestionContainer sx={{ border: "solid 3px #13ca414e" }}>
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
          <QuestionContainer sx={{ border: "solid 3px #ca13224e" }}>
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

  return (
    <Container>
      <HeaderStyled>
        <Link to='/'>Home</Link>
        <h1>Resultado</h1>
      </HeaderStyled>
      <div>
        {renderCorrectAndWorkQuestions()}
        <Button
          sx={{
            margin: "0 50%",
            transform: "translate(-50%,0%)",
            width: "200px",
          }}
          variant='contained'
          onClick={() => {
            setShow(!show);
          }}>
          Mostrar Perguntas
        </Button>
        <div>{show ? <div>{showResult()}</div> : null}</div>
      </div>
    </Container>
  );
}
