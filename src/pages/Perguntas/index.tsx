import { Button, Container } from "@material-ui/core";
import { Box } from "@material-ui/system";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderStyled } from "../Home/styles";
import { QuestionBox } from "./styles";

export default function Perguntas() {
  const axios = require("axios");
  const [questions, setQuestions]: any = useState([]);
  async function getQuestions() {
    const newQuestions = await axios.get(
      "https://opentdb.com/api.php?amount=5"
    );
    setQuestions(newQuestions.data.results);
  }
  useEffect(() => {
    getQuestions();
  }, []);

  type Question = {
    incorrect_answers: [""];
    correct_answer: string;
    difficulty: string;
    question: string;
    category: string;
  };

  function createMultipleQuestions(question: Question) {
    const answer = [];
    answer.push(<div key={"correct"}>{question.correct_answer}</div>);
    answer.push(
      question.incorrect_answers.map((prop, index) => {
        return <div key={index}>{prop}</div>;
      })
    );

    return answer;
  }

  function createBooleanQuestions(question: Question) {
    return (
      <div>
        <div>
          <p>True</p>
        </div>
        <div>
          <p>False</p>
        </div>
      </div>
    );
  }

  function transformQuestions(): any {
    const x = [];
    x.push(
      questions.map((prop: any, index: number) => {
        return (
          <>
            <QuestionBox key={index}>
              <div className='c-question-header'>
                <p>Category: {prop.category}</p>
                <p>Difficulty: {prop.difficulty}</p>
              </div>

              <p>
                Question: <br /> {prop.question}
              </p>

              <div className='c-answer-box'>
                <h4>Answers</h4>
                <div>
                  {prop.type === "boolean"
                    ? createBooleanQuestions(prop)
                    : createMultipleQuestions(prop)}
                </div>
              </div>
            </QuestionBox>
            <hr />
          </>
        );
      })
    );

    return x;
  }

  return (
    <div>
      <HeaderStyled>
        <Button>
          <Link to='/'>Voltar</Link>
        </Button>
        <h1>Perguntas</h1>
      </HeaderStyled>
      <Container sx={{ background: "#f9f9f9", border: "1px solid #000" }}>
        {transformQuestions()}
      </Container>
    </div>
  );
}
