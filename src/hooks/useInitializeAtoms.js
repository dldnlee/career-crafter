import { useEffect } from "react";
import { 
  communityTab,
  q_rangeEnd,
  q_rangeStart,
  userAnswerData,
  userProgress,
  outgoingAnswers,
  challengingAnswers,
  regularityAnswers,
  actionAnswers,
  readinessAnswers,
  signupData,
  initStats,
  userData
} from "../data";
import {useSetAtom} from 'jotai';


export function useInitializeAtoms() {
  const setCommunityTab = useSetAtom(communityTab)
  const setQ_rangeEnd = useSetAtom(q_rangeEnd)
  const setQ_rangeStart = useSetAtom(q_rangeStart)
  const setUserAnswerData = useSetAtom(userAnswerData)
  const setUserProgress = useSetAtom(userProgress)
  const setOutgoingAnswers = useSetAtom(outgoingAnswers)
  const setChallengingAnswers = useSetAtom(challengingAnswers)
  const setRegularityAnswers = useSetAtom(regularityAnswers)
  const setActionAnswers = useSetAtom(actionAnswers)
  const setReadinessAnswers = useSetAtom(readinessAnswers)
  const setSignupData = useSetAtom(signupData)
  const setInitStat = useSetAtom(initStats)
  const setUser = useSetAtom(userData);

  useEffect(() => {
    setCommunityTab(1);
    setQ_rangeEnd(0);
    setQ_rangeStart(0);
    setUserAnswerData();
    setUserProgress(0);
    setOutgoingAnswers([]);
    setChallengingAnswers([]);
    setRegularityAnswers([]);
    setActionAnswers([]);
    setReadinessAnswers([]);
    setSignupData();
    setInitStat([]);
    // setUser([]);
  }, [])
}