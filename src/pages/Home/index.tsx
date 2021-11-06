import { MenuItem, Select } from "@mui/material";
import React from "react";
import { ContextContainer, HeaderStyled, Main } from "./styles";

export function Home() {
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
          <input type='text' />
        </div>
      </Main>
    </ContextContainer>
  );
}
