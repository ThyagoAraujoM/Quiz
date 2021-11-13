import React, { createContext, ReactNode, useState } from "react";

type Questions = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answer: [string];
};

type CorrectQuestionAndAnswer = {
  question: string;
  answer: string;
};

type QuestionsContextType = {
  questions: Questions[];
  correctQuestionAndAnswer: CorrectQuestionAndAnswer[];
  getQuestions: (quantity: string) => void;
};

type QuestionsContextProviderProps = {
  children: ReactNode;
};

export const QuestionsContext = createContext({} as QuestionsContextType);

export function QuestionsContextProvider(props: QuestionsContextProviderProps) {
  const axios = require("axios");
  const [questions, setQuestions] = useState<Questions[]>([]);
  const [correctQuestionAndAnswer, setCorrectQuestionAndAnswer] = useState<
    CorrectQuestionAndAnswer[]
  >([]);

  async function getQuestions(quantity: string) {
    const newQuestions = await axios.get(
      `https://opentdb.com/api.php?amount=${quantity}`
    );

    let correctQuestionAndAnswerValue = [];

    for (let prop in newQuestions.data.results) {
      let questionAndAnswer = {
        question: newQuestions.data.results[prop].question,
        answer: newQuestions.data.results[prop].correct_answer,
      };
      correctQuestionAndAnswerValue.push(questionAndAnswer);
    }
    setCorrectQuestionAndAnswer(correctQuestionAndAnswerValue);
    setQuestions(newQuestions.data.results);
  }

  return (
    <QuestionsContext.Provider
      value={{
        questions,
        correctQuestionAndAnswer,
        getQuestions,
      }}>
      {props.children}
    </QuestionsContext.Provider>
  );
}
