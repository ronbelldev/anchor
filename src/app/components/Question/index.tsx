import React, { useEffect, useState } from 'react'
import Button from '../Button/index'
import { Question } from '../../utils/quizData'
import './index.scss'

interface QuestionProps {
  question: Question,
  buttonText: string,
  isShowNextButton: boolean,
  userAnswer: number,
  updateAnswers: (selectedIndex: number) => void,
  onNextStep: () => void,
  onPrevious: () => void
}

const Question: React.FC<QuestionProps>  = ({ onNextStep, updateAnswers, userAnswer, onPrevious, question, buttonText, isShowNextButton }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number>(userAnswer || -1)

  useEffect(() => {
      setSelectedAnswer(userAnswer ?? -1)
  }, [userAnswer])

  const onSelectAnswer = (index: number) =>{
      updateAnswers(index)
      setSelectedAnswer(index)
  }

  const onNext = () => {
      setSelectedAnswer(-1)
      onNextStep()
  }

  return (
    <div className='question-wrapper'>
        <div className='question-title'>{question.text}</div>
        <ul>
          {question.answers.map((answer, index) => (
            <li
              key={index}
              className={index === selectedAnswer
                ? 'selected'
                : ''}
              onClick={() => onSelectAnswer(index)}
            >
              {answer.text}
            </li>
          ))}
        </ul>
      <div className='buttons-container'>
        {isShowNextButton &&
            <Button
                onClick={onPrevious}
                text={'< Previous'}
            />}
        <Button
          onClick={() => onNext()}
          text={buttonText}
          isDisabled={selectedAnswer < 0}
        />
      </div>
    </div>
  )
}

export default Question
