import { useContext } from "react";
import { QuestionsContext } from "../context/QuestionsContext";

export function useQuestions() {
  const value = useContext(QuestionsContext);
  return value;
}
