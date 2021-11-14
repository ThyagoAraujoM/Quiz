import { Button, Container } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import { useQuestions } from "../../hooks/useQuestions";
import { HeaderStyled } from "../Home/styles";
import { QuestionBox } from "./styles";

type Question = {
  incorrect_answers: [""];
  correct_answer: string;
  difficulty: string;
  question: string;
  category: string;
};
type UserAnswers = {
  answer: string;
};

type ParamsType = {
  quantity: string;
};

export default function Perguntas() {
  const { questions, correctQuestionAndAnswer, getQuestions } = useQuestions();
  const userAnswers: UserAnswers[] = [];
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState(false);
  let params = useParams<ParamsType>();

  useEffect(() => {
    getQuestions(params.quantity);
  }, []);

  function transformQuestions(): any {
    const x = [];
    x.push(
      questions.map((value: any, index: number) => {
        return (
          <QuestionBox key={index}>
            <div className='c-question-header'>
              <p>Category: {value.category}</p>
              <p>Difficulty: {value.difficulty}</p>
            </div>

            <p>
              Question: <br /> {value.question}
            </p>

            <div className='c-answer-box'>
              <h4>Answers</h4>
              <div>
                {value.type === "boolean"
                  ? createBooleanQuestions(value, index)
                  : createMultipleQuestions(value, index)}
              </div>
            </div>
          </QuestionBox>
        );
      })
    );

    return x;
  }

  function createMultipleQuestions(prop: Question, index: number) {
    const answer = [];

    answer.push(
      <div
        key={"correct"}
        onClick={() => {
          userAnswers[index] = {
            answer: prop.correct_answer,
          };
        }}>
        {prop.correct_answer}
      </div>
    );
    answer.push(
      prop.incorrect_answers.map((value, key) => {
        return (
          <div
            key={key}
            onClick={() => {
              userAnswers[index] = {
                answer: value,
              };
            }}>
            {value}
          </div>
        );
      })
    );

    return answer;
  }

  function createBooleanQuestions(prop: Question, index: number) {
    return (
      <div>
        <div>
          <p
            onClick={() => {
              userAnswers[index] = {
                answer: "True",
              };
            }}>
            True
          </p>
        </div>
        <div>
          <p
            onClick={() => {
              userAnswers[index] = {
                answer: "False",
              };
            }}>
            False
          </p>
        </div>
      </div>
    );
  }

  function processRedirect() {
    let data = [];
    for (let value in correctQuestionAndAnswer) {
      data.push({
        question: correctQuestionAndAnswer[value].question,
        correct_answer: correctQuestionAndAnswer[value].answer,
        user_answer: userAnswers[value].answer,
      });
    }
    localStorage.setItem("currentQuiz", JSON.stringify(data));

    setRedirect(true);
    setError(false);
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
        {questions ? transformQuestions() : null}
        <Button
          onClick={() => {
            if (correctQuestionAndAnswer.length === userAnswers.length) {
              processRedirect();
            } else {
              setError(true);
            }
          }}>
          Finalizar
        </Button>
        {error ? <div>Preencha todos os dados</div> : null}
      </Container>
      {redirect ? <Redirect push to='/resultado' /> : null}
    </div>
  );
}
