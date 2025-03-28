'use client';

import { useState, useEffect } from 'react';
import { words, Word } from '@/data/words';

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [options, setOptions] = useState<string[]>([]);
  const [showScore, setShowScore] = useState(false);
  const [currentWord, setCurrentWord] = useState<Word | null>(null);

  const generateOptions = (correctWord: Word) => {
    const otherWords = words.filter(word => word.english !== correctWord.english);
    const randomWords = otherWords.sort(() => 0.5 - Math.random()).slice(0, 3);
    const allOptions = [...randomWords.map(word => word.english), correctWord.english];
    return allOptions.sort(() => 0.5 - Math.random());
  };

  const startNewQuestion = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setCurrentWord(randomWord);
    setOptions(generateOptions(randomWord));
  };

  useEffect(() => {
    startNewQuestion();
  }, []);

  const handleAnswer = (selectedAnswer: string) => {
    if (selectedAnswer === currentWord?.english) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < 10) {
      setCurrentQuestion(currentQuestion + 1);
      startNewQuestion();
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    startNewQuestion();
  };

  if (showScore) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-3xl font-bold mb-4">Quiz Complete!</h1>
          <p className="text-xl mb-4">Your Score: {score * 10}</p>
          <button
            onClick={restartQuiz}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Start Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="mb-6">
          <div className="text-sm text-gray-500 mb-2">
            Question {currentQuestion + 1} / 10
          </div>
          <h2 className="text-2xl font-bold mb-4">
            What does this Chinese word mean?
          </h2>
          <div className="text-4xl font-bold text-center mb-8">
            {currentWord?.chinese}
          </div>
        </div>

        <div className="space-y-4">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="w-full bg-gray-100 p-4 rounded-lg text-left hover:bg-gray-200 transition-colors"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 