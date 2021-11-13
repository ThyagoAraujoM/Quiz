import { Button, MenuItem, Modal } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import {
  AnswersGrid,
  CorrectAnswer,
  QuestionContainer,
  WrongAnswer,
} from "../Resultado/styles";
import {
  BoxStyle,
  ContextContainer,
  HeaderStyled,
  Main,
  SelectStyle,
} from "./styles";

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const [quantityOfQuestions, setQuantityOfQuestions] = useState("");
  const [show, setShow] = useState(false);
  const [storageQuizSelected, setStorageQuizSelected] = useState<any[]>([]);
  let listOfDatesOfQuizzes: [] | any =
    localStorage.getItem("listOfDatesOfQuizzes") != null
      ? localStorage.getItem("listOfDatesOfQuizzes")
      : [];

  if (listOfDatesOfQuizzes[0] != null) {
    listOfDatesOfQuizzes = JSON.parse(listOfDatesOfQuizzes);
  }

  const handleOpen = (value: any) => {
    setQuantityOfQuestions(`${value.perguntas}`);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  function showQuizSelected(quizSelected: string) {
    let quizStorage: any = localStorage.getItem(quizSelected);
    quizStorage = JSON.parse(quizStorage);
    const componentQuizSelected: any[] = [];
    for (let value in quizStorage) {
      if (
        quizStorage[value].correct_answer === quizStorage[value].user_answer
      ) {
        componentQuizSelected.push(
          <QuestionContainer key={value} sx={{ border: "solid 3px #13ca414e" }}>
            <p>{quizStorage[value].question}</p>
            <AnswersGrid>
              <CorrectAnswer sx={{ border: "1px solid #00000075" }}>
                {quizStorage[value].correct_answer}
              </CorrectAnswer>
            </AnswersGrid>
          </QuestionContainer>
        );
      } else {
        componentQuizSelected.push(
          <QuestionContainer key={value} sx={{ border: "solid 3px #ca13224e" }}>
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
    setStorageQuizSelected(componentQuizSelected);
    setShow(true);
  }

  function renderListOfQuizzes() {
    let list = [];
    for (let value in listOfDatesOfQuizzes) {
      list.push(
        <MenuItem
          key={value}
          onClick={() => {
            showQuizSelected(listOfDatesOfQuizzes[value]);
          }}>
          <p>{listOfDatesOfQuizzes[value]}</p>
        </MenuItem>
      );
    }
    return list;
  }

  const QuestionsValueSchema = Yup.object().shape({
    perguntas: Yup.number()
      .min(1, "Too Short")
      .max(50, "Too Long!")
      .required("Required"),
  });
  return (
    <ContextContainer>
      <HeaderStyled sx={{ position: "relative" }}>
        <h1>Quiz</h1>
        {listOfDatesOfQuizzes ? (
          <SelectStyle
            displayEmpty
            renderValue={() => {
              return <em>Quiz Finalizados: 0</em>;
            }}>
            {listOfDatesOfQuizzes[0] !== undefined
              ? renderListOfQuizzes()
              : null}
          </SelectStyle>
        ) : null}
      </HeaderStyled>
      <Main>
        <h2>Teste seu conhecimento com perguntas de diferentes temas</h2>
        <div className='c-input-container'>
          <p>Digite o número de perguntas que deseja responder</p>

          <Formik
            initialValues={{
              perguntas: "",
            }}
            validationSchema={QuestionsValueSchema}
            onSubmit={handleOpen}>
            {({ errors, touched }) => (
              <Form>
                <Field name='perguntas' type='number' />
                {errors.perguntas && touched.perguntas ? (
                  <div>{errors.perguntas}</div>
                ) : null}
                <Button type='submit'>Começar</Button>
              </Form>
            )}
          </Formik>
        </div>
        {show ? storageQuizSelected : null}
      </Main>
      <Modal hideBackdrop open={open} onClose={handleClose}>
        <BoxStyle>
          <h2 id='child-modal-title'>Deseja Iniciar as perguntas ?</h2>
          <p id='child-modal-description'>
            Clique iniciar para iniciar as perguntas, calcelar para voltar e
            escolher outra quantidade.
          </p>
          <div className='c-buttons-modal'>
            <Button onClick={handleClose}>Close</Button>
            <Button>
              <Link to={`/perguntas/${quantityOfQuestions}`}>Start</Link>
            </Button>
          </div>
        </BoxStyle>
      </Modal>
    </ContextContainer>
  );
}
