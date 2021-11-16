import { Modal, Select } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { ContextContainer } from "../../styles/geral";
import {
  AnswersGrid,
  CorrectAnswer,
  ScoreContainer,
  WrongAnswer,
} from "../Resultado/styles";
import {
  HeaderStyled,
  BoxStyle,
  Main,
  QuestionsContainer,
  QuestionContainer,
  StyledMenuItem,
  StyledButton,
  ModalButton,
  ShowSelectedQuizButton,
} from "./styles";

export default function Home() {
  const [openModal, setOpenModal] = React.useState(false);
  const [showSelectedQuiz, setShowSelectedQuiz] = useState(false);
  const [quantityOfQuestions, setQuantityOfQuestions] = useState("");
  const [storageQuizSelected, setStorageQuizSelected] = useState<any[]>([]);
  const [numberOfWorngAndCorrects, setNumberOfWorngAndCorrects] = useState<{
    correct: number;
    wrong: number;
  }>({ correct: 0, wrong: 0 });

  const [showButtonOfSelectedQuiz, setShowButtonOfSelectedQuiz] =
    useState(false);

  let listOfDatesOfQuizzes: [] | any =
    localStorage.getItem("listOfDatesOfQuizzes") != null
      ? localStorage.getItem("listOfDatesOfQuizzes")
      : [];
  if (listOfDatesOfQuizzes[0] != null) {
    listOfDatesOfQuizzes = JSON.parse(listOfDatesOfQuizzes);
  }

  function renderListOfQuizzes() {
    let list = [];
    for (let value in listOfDatesOfQuizzes) {
      list.push(
        <StyledMenuItem
          key={value}
          onClick={() => {
            selectQuiz(listOfDatesOfQuizzes[value]);
          }}>
          <p>{listOfDatesOfQuizzes[value]}</p>
        </StyledMenuItem>
      );
    }
    return list;
  }

  function selectQuiz(quizSelected: string) {
    let quizStorage: any = localStorage.getItem(quizSelected);
    quizStorage = JSON.parse(quizStorage);
    const componentQuizSelected: any[] = [];

    let wrong = 0,
      correct = 0;

    for (let value in quizStorage) {
      if (
        quizStorage[value].correct_answer === quizStorage[value].user_answer
      ) {
        correct++;
        componentQuizSelected.push(
          <QuestionContainer key={value}>
            <p>{quizStorage[value].question}</p>
            <AnswersGrid>
              <CorrectAnswer sx={{ border: "1px solid #00000075" }}>
                {quizStorage[value].correct_answer}
              </CorrectAnswer>
            </AnswersGrid>
          </QuestionContainer>
        );
      } else {
        wrong++;
        componentQuizSelected.push(
          <QuestionContainer key={value}>
            <p>{quizStorage[value].question}</p>
            <AnswersGrid>
              <CorrectAnswer>{quizStorage[value].correct_answer}</CorrectAnswer>
              <WrongAnswer sx={{ border: "1px solid #00000075" }}>
                {quizStorage[value].user_answer}
              </WrongAnswer>
            </AnswersGrid>
          </QuestionContainer>
        );
      }
    }
    setNumberOfWorngAndCorrects({ correct, wrong });
    setStorageQuizSelected(componentQuizSelected);
    setShowButtonOfSelectedQuiz(true);
  }

  function renderSelectedQuiz() {
    return (
      <>
        <ScoreContainer>
          <div className='c-score c-correct'>
            <h3>{numberOfWorngAndCorrects.correct}</h3>
            <h4>Acertos</h4>
          </div>
          <div className='c-score c-wrong'>
            <h3>{numberOfWorngAndCorrects.wrong}</h3>
            <h4>Erros</h4>
          </div>
        </ScoreContainer>
        <QuestionsContainer> {storageQuizSelected} </QuestionsContainer>
      </>
    );
  }

  const QuestionsValueSchema = Yup.object().shape({
    perguntas: Yup.number()
      .min(1, "Too Short")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const handleOpen = (value: any) => {
    setQuantityOfQuestions(`${value.perguntas}`);
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <ContextContainer>
      <HeaderStyled>
        {listOfDatesOfQuizzes[0] !== undefined ? (
          <Select
            displayEmpty
            renderValue={() => {
              return <em>Completed quizzes: {listOfDatesOfQuizzes.length}</em>;
            }}
            className={"c-header-select"}>
            {renderListOfQuizzes()}
          </Select>
        ) : null}
      </HeaderStyled>
      <Main>
        <h2>
          How about testing your knowledge? <br /> Get started now,
          <br /> choose how many questions you want to ask{" "}
        </h2>

        <Formik
          initialValues={{
            perguntas: "",
          }}
          validationSchema={QuestionsValueSchema}
          onSubmit={handleOpen}>
          {({ errors, touched }) => (
            <Form className={"c-form"}>
              <Field className='c-text-Input' name='perguntas' type='number' />
              {errors.perguntas && touched.perguntas ? (
                <div className={"c-error"}>{errors.perguntas}</div>
              ) : null}

              <StyledButton type='submit'>Start</StyledButton>
            </Form>
          )}
        </Formik>

        {showButtonOfSelectedQuiz ? (
          <ShowSelectedQuizButton
            onClick={() => {
              setShowSelectedQuiz(!showSelectedQuiz);
            }}>
            Show Quiz
          </ShowSelectedQuizButton>
        ) : null}

        {showSelectedQuiz ? renderSelectedQuiz() : null}
      </Main>
      <Modal hideBackdrop open={openModal} onClose={handleClose}>
        <BoxStyle>
          <h2 id='child-modal-title'>Do you want to start ?</h2>
          <p id='child-modal-description'>
            Confirm to start questions, cancel to return.
          </p>
          <div className='c-buttons-modal'>
            <ModalButton onClick={handleClose}>Close</ModalButton>
            <ModalButton>
              <Link
                className={"c-link"}
                to={`/perguntas/${quantityOfQuestions}`}>
                Start
              </Link>
            </ModalButton>
          </div>
        </BoxStyle>
      </Modal>
    </ContextContainer>
  );
}
