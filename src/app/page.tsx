"use client"
import React, { useState } from 'react'
import Button from '@/app/components/Button'
import { quizData } from '@/app/utils/quizData'
import Question from '@/app/components/Question'
const START_GAME = 0
import './index.scss'

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(START_GAME)
  const [userAnswers, setUserAnswers] = useState<number[]>([])
  const isGameEnded = currentQuestionIndex === quizData.questions.length
  const isLastQuestion = currentQuestionIndex === quizData.questions.length - 1
  const correctAnswers = isGameEnded
    ? quizData.questions.map((q, index) => q.answers.findIndex(answer => answer.isCorrect))
    : []

  const onClickRestart = () => {
    setCurrentQuestionIndex(0)
    setUserAnswers([])
  }
  const updateAnswers = (selectedIndex: number) => {
    const updatedAnswers = [...userAnswers]
    updatedAnswers[currentQuestionIndex] = selectedIndex
    setUserAnswers(updatedAnswers)
  }

   const onNextStep = () => {
     setCurrentQuestionIndex(currentQuestionIndex + 1)
   }

  const onPrevious = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1)
  }

  return (
    <div className='home'>
      <div className='home-content'>
        {isGameEnded ? (
            <div className='results-wrapper'>
              <div className='results'>{`Your score is: ${userAnswers.reduce((acc, userAnswer, index) => {
                if (correctAnswers[index] === userAnswer) {
                  return acc + 20
                }
                return acc
              }, 0)}!`}</div>
              <Button
                onClick={onClickRestart}
                text='Restart'
              />
            </div>
          ) : (
              <Question
                onNextStep={onNextStep}
                updateAnswers={updateAnswers}
                userAnswer={userAnswers[currentQuestionIndex]}
                question={quizData.questions[currentQuestionIndex]}
                buttonText={isLastQuestion ? 'Submit' : 'Next >'}
                isShowNextButton={currentQuestionIndex !== 0}
                onPrevious={onPrevious}
              />
        )}
      </div>
    </div>
  )
}
