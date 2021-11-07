import { Button, Box, MenuItem, Modal, Select } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { ContextContainer, HeaderStyled, Main } from "./styles";

export function Home() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ContextContainer>
      <HeaderStyled sx={{ position: "relative" }}>
        <h1>Quiz</h1>
        <Select
          sx={{
            color: "#fff",
            width: 190,
            position: "absolute",
            right: "0",
            mr: 2,
          }}
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
        </Select>
      </HeaderStyled>
      <Main>
        <h2>Teste seu conhecimento com perguntas de diferentes temas</h2>
        <div className='c-input-container'>
          <p>Digite o número de perguntas que deseja responder</p>
          <div>
            <input type='text' />
            <button onClick={handleOpen}>Começar</button>
            <Link to={"/Home"}>Start</Link>
          </div>
        </div>
      </Main>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby='child-modal-title'
        aria-describedby='child-modal-description'>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            backgroundColor: "#141412",
            border: "2px solid #080808",
            boxShadow: 24,
            padding: "2 4 3",
            color: "#fff",
          }}>
          <h2 id='child-modal-title'>Text in a child modal</h2>
          <p id='child-modal-description'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </ContextContainer>
  );
}
