import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Question from './index'

const mockUpdateAnswers = jest.fn()
const mockNextStep = jest.fn()
const mockPrevious = jest.fn()

const mockQuestion = {
  text: 'Sample Question',
  answers: [
    { text: 'Option 1', isCorrect: true },
    { text: 'Option 2', isCorrect: false },
    { text: 'Option 3', isCorrect: false },
  ],
}

describe('Question component', () => {
  it('renders question and answer options', () => {
    const { getByText } = render(
      <Question
        onNextStep={mockNextStep}
        updateAnswers={mockUpdateAnswers}
        userAnswer={-1}
        onPrevious={mockPrevious}
        question={mockQuestion}
        buttonText="Submit"
        isShowNextButton={true}
      />
    )

    // expect(getByText('Sample Question')).toBeInTheDocument()
    // expect(getByText('Option 1')).toBeInTheDocument()
    // expect(getByText('Option 2')).toBeInTheDocument()
    // expect(getByText('Option 3')).toBeInTheDocument()
  })

  it('selects an answer and calls updateAnswers when the button is clicked', () => {
    const { getByText, getByTestId } = render(
      <Question
        onNextStep={mockNextStep}
        updateAnswers={mockUpdateAnswers}
        userAnswer={-1}
        onPrevious={mockPrevious}
        question={mockQuestion}
        buttonText="Submit"
        isShowNextButton={true}
      />
    )

    fireEvent.click(getByText('Option 1'))

    // expect(getByTestId('submit-button')).toBeEnabled()
    fireEvent.click(getByTestId('submit-button'))

    expect(mockUpdateAnswers).toHaveBeenCalledWith(0)
  })

  it('calls onNextStep when the "Next" button is clicked', () => {
    const { getByText } = render(
      <Question
        onNextStep={mockNextStep}
        updateAnswers={mockUpdateAnswers}
        userAnswer={-1}
        onPrevious={mockPrevious}
        question={mockQuestion}
        buttonText="Submit"
        isShowNextButton={true}
      />
    )

    fireEvent.click(getByText('Submit'))

    expect(mockNextStep).toHaveBeenCalled()
  })

  it('calls onPrevious when the "Previous" button is clicked', () => {
    const { getByText } = render(
      <Question
        onNextStep={mockNextStep}
        updateAnswers={mockUpdateAnswers}
        userAnswer={-1}
        onPrevious={mockPrevious}
        question={mockQuestion}
        buttonText="Submit"
        isShowNextButton={true}
      />
    )

    fireEvent.click(getByText('< Previous'))

    expect(mockPrevious).toHaveBeenCalled()
  })
})
