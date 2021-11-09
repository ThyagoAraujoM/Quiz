import { Button, MenuItem, Modal } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import {
  BoxStyle,
  ContextContainer,
  HeaderStyled,
  Main,
  SelectStyle,
} from "./styles";

export default function Home() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
        <SelectStyle
          displayEmpty
          renderValue={() => {
            return <em>Quiz Finalizados: 0</em>;
          }}>
          <MenuItem
            onClick={() => {
              alert("test");
            }}
            value=''>
            <em>Placeholder</em>
          </MenuItem>
        </SelectStyle>
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
              <Link to={`/perguntas?`}>Start</Link>
            </Button>
          </div>
        </BoxStyle>
      </Modal>
    </ContextContainer>
  );
}
