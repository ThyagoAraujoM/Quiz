import React, { createContext, ReactNode, useEffect, useState } from "react";
import { questions } from "../pages/Perguntas/styles";

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
type UserQuestionAndAnswer = {
  question: string;
  answer: string;
};
type QuestionsContextType = {
  questions: Questions[];
  correctQuestionAndAnswer: CorrectQuestionAndAnswer[];
  userQuestionAndAnswer: UserQuestionAndAnswer[] | undefined;
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
  const [userQuestionAndAnswer, setuserQuestionAndAnswer] = useState<
    UserQuestionAndAnswer[]
  >([]);

  async function getQuestions() {
    const newQuestions = await axios.get(
      "https://opentdb.com/api.php?amount=5"
    );
    for (let prop in newQuestions.data.results) {
      let questionAndAnswer = {
        question: newQuestions.data.results[prop].question,
        answer: newQuestions.data.results[prop].correct_answer,
      };
      setCorrectQuestionAndAnswer([
        ...correctQuestionAndAnswer,
        questionAndAnswer,
      ]);
    }
    setQuestions(newQuestions.data.results);
  }

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <QuestionsContext.Provider
      value={{ questions, userQuestionAndAnswer, correctQuestionAndAnswer }}>
      {props.children}
    </QuestionsContext.Provider>
  );
}
