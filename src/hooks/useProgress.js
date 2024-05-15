import { useAtom, useAtomValue, useSetAtom } from "jotai"
import { useEffect } from "react";
import { 
  userAnswerData,
  outgoingAnswers, 
  challengingAnswers, 
  regularityAnswers, 
  actionAnswers, 
  readinessAnswers,
  userProgress } from "/src/data"
import { getTotalSum } from "../util";

export async function useProgress() {
  const userAnswers = useAtomValue(userAnswerData);
  const [outgoing, setOutgoing] = useAtom(outgoingAnswers);
  const [challenging, setChallenging] = useAtom(challengingAnswers);
  const [regularity, setRegularity] = useAtom(regularityAnswers);
  const [action, setAction] = useAtom(actionAnswers);
  const [readiness, setReadiness] = useAtom(readinessAnswers);
  const setProgress = useSetAtom(userProgress);

  useEffect(() => {
    if (!userAnswers) return;
    setOutgoing(JSON.parse(userAnswers.outgoing));
    setChallenging(JSON.parse(userAnswers.challenging));
    setRegularity(JSON.parse(userAnswers.regularity));
    setAction(JSON.parse(userAnswers.action));
    setReadiness(JSON.parse(userAnswers.readiness));
  }, [userAnswers]);

  useEffect(() => {
    const listOfAnswers = [outgoing, challenging, regularity, action, readiness];
    const total = getTotalSum(listOfAnswers);
    setProgress(total);
  }, [userAnswers]);
}