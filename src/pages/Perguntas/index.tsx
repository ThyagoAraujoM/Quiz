import { useEffect, useState } from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import { useQuestions } from "../../hooks/useQuestions";
import parse from "html-react-parser";
import {
  ContextContainer,
  HeaderStyled,
  ReturnButton,
} from "../../styles/geral";
import {
  Answer,
  EndQuizButton,
  Error,
  QuestionBox,
  QuestionsContainer,
} from "./styles";

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
              Question: <br />
              {parse(`${value.question}`)}
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
    let answer = [];

    answer.push(
      <Answer
        key={"correct"}
        onClick={() => {
          userAnswers[index] = {
            answer: prop.correct_answer,
          };
          document
            .querySelector(`.c-answer-0-${index}`)
            ?.classList.add("selected");

          document
            .querySelector(`.c-answer-1-${index}`)
            ?.classList.remove("selected");
          document
            .querySelector(`.c-answer-2-${index}`)
            ?.classList.remove("selected");
          document
            .querySelector(`.c-answer-3-${index}`)
            ?.classList.remove("selected");
        }}
        className={`c-answer-0-${index}`}>
        {parse(prop.correct_answer)}
      </Answer>
    );

    prop.incorrect_answers.map((value, key) => {
      answer.push(
        <Answer
          key={key}
          onClick={() => {
            userAnswers[index] = {
              answer: value,
            };

            for (let i = 0; i <= 3; i++) {
              document
                .querySelector(`.c-answer-${i}-${index}`)
                ?.classList.remove("selected");
            }
            document
              .querySelector(`.c-answer-${key + 1}-${index}`)
              ?.classList.add("selected");
          }}
          className={`c-answer-${key + 1}-${index}`}>
          {value}
        </Answer>
      );
    });

    answer.sort(function (a, b) {
      return 0.5 - Math.random();
    });

    return answer;
  }

  function createBooleanQuestions(prop: Question, index: number) {
    let answer = [];
    answer.push(
      <Answer
        onClick={() => {
          userAnswers[index] = {
            answer: "True",
          };
          document
            .querySelector(`.c-answer-true-${index}`)
            ?.classList.add("selected");
          document
            .querySelector(`.c-answer-false-${index}`)
            ?.classList.remove("selected");
        }}
        className={`c-answer-true-${index}`}>
        True
      </Answer>
    );
    answer.push(
      <Answer
        onClick={() => {
          userAnswers[index] = {
            answer: "False",
          };
          document
            .querySelector(`.c-answer-true-${index}`)
            ?.classList.remove("selected");
          document
            .querySelector(`.c-answer-false-${index}`)
            ?.classList.add("selected");
        }}
        className={`c-answer-false-${index}`}>
        False
      </Answer>
    );
    return answer;
  }

  function processRedirect() {
    let data = [];
    try {
      for (let value in correctQuestionAndAnswer) {
        data.push({
          question: correctQuestionAndAnswer[value].question,
          correct_answer: correctQuestionAndAnswer[value].answer,
          user_answer: userAnswers[value].answer,
        });
      }
      localStorage.setItem("currentQuiz", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }

    setRedirect(true);
    setError(false);
  }

  return (
    <ContextContainer>
      <HeaderStyled>
        <ReturnButton>
          <Link className={"c-link"} to='/'>
            Return
          </Link>
        </ReturnButton>
        <h1>Questions</h1>
      </HeaderStyled>
      <QuestionsContainer>
        {questions ? transformQuestions() : null}
        {error ? <Error>Fill in all data </Error> : null}
        <EndQuizButton
          onClick={() => {
            if (correctQuestionAndAnswer.length === userAnswers.length) {
              processRedirect();
            } else {
              setError(true);
            }
          }}>
          Finish
        </EndQuizButton>
      </QuestionsContainer>
      {redirect ? <Redirect push to='/resultado' /> : null}
    </ContextContainer>
  );
}
