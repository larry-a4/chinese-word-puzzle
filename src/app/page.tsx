'use client';

import { useState, useEffect } from 'react';
import { words, Word } from '@/data/words';

interface Level {
  level: number;
  questions: number;
  options: number;
  timeLimit: number;
}

interface LevelResult {
  score: number;
  timeUsed: number;
  totalTime: number;
  stars: number;
  canProceed: boolean;
}

export default function Home() {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [options, setOptions] = useState<Word[]>([]);
  const [showScore, setShowScore] = useState(false);
  const [currentWord, setCurrentWord] = useState<Word | null>(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [levelComplete, setLevelComplete] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [levelStartTime, setLevelStartTime] = useState(0);
  const [usedWords, setUsedWords] = useState<Set<string>>(new Set());

  const getLevelConfig = (level: number): Level => {
    return {
      level,
      questions: 10,
      options: Math.min(4 + Math.floor(level / 3), 6),
      timeLimit: 60, // 固定60秒
    };
  };

  // 根据关卡获取对应难度的词汇
  const getWordsByLevel = (level: number): Word[] => {
    // 每4个关卡增加一个难度等级
    const difficulty = Math.min(Math.ceil(level / 4), 5);
    return words.filter(word => word.difficulty === difficulty);
  };

  const calculateLevelResult = (score: number, timeUsed: number, totalTime: number): LevelResult => {
    const correctRate = score / 10;
    const timeBonus = timeUsed / 60; // 剩余时间比例，越高越好

    let stars = 0;
    if (correctRate >= 0.9) {
      stars = 3;
    } else if (correctRate >= 0.7) {
      stars = 2;
    } else if (correctRate >= 0.6) {
      stars = 1;
    }

    // 如果用时超过限制的80%，降一颗星
    if (timeBonus < 0.2 && stars > 0) {
      stars--;
    }

    return {
      score,
      timeUsed,
      totalTime,
      stars,
      canProceed: correctRate >= 0.6,
    };
  };

  const generateOptions = (correctWord: Word, levelConfig: Level) => {
    // 获取当前关卡对应难度的词汇
    const levelWords = getWordsByLevel(currentLevel);
    // 过滤掉已使用的词汇和当前正确答案
    const availableWords = levelWords.filter(word => 
      !usedWords.has(word.chinese) && word.chinese !== correctWord.chinese
    );
    
    // 如果可用词汇不足，重置已使用词汇集合
    if (availableWords.length < levelConfig.options - 1) {
      setUsedWords(new Set());
      const resetWords = levelWords.filter(word => word.chinese !== correctWord.chinese);
      const randomWords = resetWords.sort(() => 0.5 - Math.random()).slice(0, levelConfig.options - 1);
      const allOptions = [...randomWords, correctWord];
      return allOptions.sort(() => 0.5 - Math.random());
    }

    const randomWords = availableWords.sort(() => 0.5 - Math.random()).slice(0, levelConfig.options - 1);
    const allOptions = [...randomWords, correctWord];
    return allOptions.sort(() => 0.5 - Math.random());
  };

  const startNewQuestion = () => {
    const levelConfig = getLevelConfig(currentLevel);
    // 从当前关卡对应难度的词汇中随机选择一个词
    const levelWords = getWordsByLevel(currentLevel);
    // 过滤掉已使用的词汇
    const availableWords = levelWords.filter(word => !usedWords.has(word.chinese));
    
    // 如果可用词汇不足，重置已使用词汇集合
    if (availableWords.length === 0) {
      setUsedWords(new Set());
      const randomWord = levelWords[Math.floor(Math.random() * levelWords.length)];
      setCurrentWord(randomWord);
      setOptions(generateOptions(randomWord, levelConfig));
      setTimeLeft(levelConfig.timeLimit);
      setStartTime(Date.now());
      return;
    }

    const randomWord = availableWords[Math.floor(Math.random() * availableWords.length)];
    setCurrentWord(randomWord);
    setOptions(generateOptions(randomWord, levelConfig));
    setTimeLeft(levelConfig.timeLimit);
    setStartTime(Date.now());
  };

  const startNewLevel = () => {
    setLevelStartTime(Date.now());
    startNewQuestion();
  };

  useEffect(() => {
    if (timeLeft > 0 && !gameOver && !levelComplete) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !gameOver && !levelComplete) {
      handleTimeUp();
    }
  }, [timeLeft, gameOver, levelComplete]);

  const handleTimeUp = () => {
    setGameOver(true);
  };

  useEffect(() => {
    startNewLevel();
  }, []);

  const handleAnswer = (selectedWord: Word) => {
    if (selectedWord.chinese === currentWord?.chinese) {
      setScore(score + 1);
    }
    // 将当前词汇添加到已使用集合中
    if (currentWord) {
      setUsedWords(prev => new Set([...prev, currentWord.chinese]));
    }

    const levelConfig = getLevelConfig(currentLevel);
    if (currentQuestion + 1 < levelConfig.questions) {
      setCurrentQuestion(currentQuestion + 1);
      startNewQuestion();
    } else {
      setLevelComplete(true);
    }
  };

  const startNextLevel = () => {
    if (currentLevel < 20) {
      setCurrentLevel(currentLevel + 1);
      setCurrentQuestion(0);
      setScore(0);
      setLevelComplete(false);
      // 重置已使用词汇集合
      setUsedWords(new Set());
      startNewLevel();
    } else {
      setShowScore(true);
    }
  };

  const restartLevel = () => {
    setCurrentQuestion(0);
    setScore(0);
    setLevelComplete(false);
    // 重置已使用词汇集合
    setUsedWords(new Set());
    startNewLevel();
  };

  const restartQuiz = () => {
    setCurrentLevel(1);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setGameOver(false);
    setLevelComplete(false);
    // 重置已使用词汇集合
    setUsedWords(new Set());
    startNewLevel();
  };

  if (showScore) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-3xl font-bold mb-4">Congratulations!</h1>
          <p className="text-xl mb-4">You've completed all 20 levels!</p>
          <button
            onClick={restartQuiz}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Play Again
          </button>
        </div>
      </div>
    );
  }

  if (gameOver) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-3xl font-bold mb-4">Time's Up!</h1>
          <p className="text-xl mb-4">Level {currentLevel} - Question {currentQuestion + 1}</p>
          <button
            onClick={restartQuiz}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (levelComplete) {
    const levelConfig = getLevelConfig(currentLevel);
    const totalTime = Math.floor((Date.now() - levelStartTime) / 1000);
    const timeLeft = Math.max(0, levelConfig.timeLimit - totalTime);
    const result = calculateLevelResult(score, timeLeft, totalTime);

    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-3xl font-bold mb-4">Level {currentLevel} Complete!</h1>
          <div className="flex justify-center space-x-2 mb-4">
            {[1, 2, 3].map((star) => (
              <span
                key={star}
                className={`text-3xl ${star <= result.stars ? 'text-yellow-400' : 'text-gray-300'}`}
              >
                ★
              </span>
            ))}
          </div>
          <p className="text-xl mb-2">Score: {score * 10}</p>
          <p className="text-lg text-gray-600 mb-2">
            Time Left: {timeLeft}s / {levelConfig.timeLimit}s
          </p>
          <p className="text-lg text-gray-600 mb-2">
            Total Time: {totalTime}s
          </p>
          <p className="text-lg text-gray-600 mb-6">
            {result.stars === 3 ? "Perfect! Excellent work!" :
             result.stars === 2 ? "Good job! Keep it up!" :
             result.stars === 1 ? "You made it! Try to do better!" :
             "Keep practicing! You can do better!"}
          </p>
          {result.canProceed ? (
            <button
              onClick={startNextLevel}
              className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition-colors"
            >
              {currentLevel < 20 ? "Next Level" : "Finish Game"}
            </button>
          ) : (
            <button
              onClick={restartLevel}
              className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors"
            >
              Try This Level Again
            </button>
          )}
        </div>
      </div>
    );
  }

  const levelConfig = getLevelConfig(currentLevel);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <div className="text-sm text-gray-500">
              Level {currentLevel} / 20
            </div>
            <div className="text-sm text-gray-500">
              Question {currentQuestion + 1} / {levelConfig.questions}
            </div>
          </div>
          <div className="text-sm text-gray-500 mb-2">
            Time Left: {timeLeft}s
          </div>
          <h2 className="text-2xl font-bold mb-4">
            Which Chinese word means:
          </h2>
          <div className="text-4xl font-bold text-center mb-8">
            {currentWord?.english}
          </div>
        </div>

        <div className="space-y-4">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="w-full bg-gray-100 p-4 rounded-lg text-left hover:bg-gray-200 transition-colors"
            >
              <div className="text-2xl">{option.chinese}</div>
              <div className="text-lg text-gray-600">{option.pinyin}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 