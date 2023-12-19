export const getScore = (correctAnswers: number[], userAnswers: number[]) =>
  userAnswers.reduce((acc, userAnswer, index) => {
  if (correctAnswers[index] === userAnswer) {
    return acc + 20
  }
  return acc
}, 0)
