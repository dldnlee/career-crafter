


export const outgoingQuestions = [
  '경험과 기술을 통해 어떤 가치를 제공할 수 있나요?',
  '이 회사에 지원한 이유는 무엇이며, 그 이유를 설명해주세요.',
  '도전에 직면했을 때 어떻게 대처했나요?',
  '자신의 업무 스타일과 성격에 대해 설명해주세요.',
  '취업 후 이루고 싶은 목표는 무엇인가요?',
  '자신의 기술과 역량을 가장 잘 드러낼 수 있는 경험이 무엇이었나요?',
  '업계 동향을 어떻게 파악하고 있으며, 그에 대한 견해가 있나요?',
  '새로운 도전이나 기술적 발전을 위해 어떤 노력을 기울였나요?',
  '이 회사의 문화나 가치관에 적응할 수 있는 이유가 있나요?',
  '가장 중요하다고 생각하는 역량은 무엇이며, 그것을 향상시키기 위한 계획이 있나요?'
]

export const testAnswers = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0];

export function getRange(answers) {
  if(answers.includes(0)) {
    return (answers.indexOf(0));
  } else {
    return false;
  }
}

export const challengingQuestions = []
export const regularityQuestions = []
export const actionQuestions = []
export const readinessQuestions = []