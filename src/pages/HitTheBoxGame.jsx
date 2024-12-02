import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HitTheBoxGame = () => {
  const [boxes, setBoxes] = useState(Array(9).fill(false)); // 9 boxes with no active keyword
  const [activeBox, setActiveBox] = useState(null); // Tracks which box has the keyword
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60); // 1-minute timer
  const [isGameActive, setIsGameActive] = useState(false);

  // Start the game
  const startGame = () => {
    setIsGameActive(true);
    setScore(0);
    setTimeLeft(60);
  };

  // Handle box click
  const handleBoxClick = (index) => {
    if (!isGameActive || activeBox === null) return;

    if (index === activeBox) {
      setScore((prevScore) => prevScore + 5); // Correct hit
    } else {
      setScore((prevScore) => prevScore - 2.5); // Miss
    }
    setActiveBox(null); // Reset keyword visibility
  };

  // Timer countdown
  useEffect(() => {
    if (isGameActive && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer); // Clean up
    } else if (timeLeft === 0) {
      setIsGameActive(false);
    }
  }, [isGameActive, timeLeft]);

  // Display the keyword on a random box
  useEffect(() => {
    if (isGameActive) {
      const interval = setInterval(() => {
        const randomBox = Math.floor(Math.random() * 9); // Choose a random box
        setActiveBox(randomBox);

        setTimeout(() => setActiveBox(null), 1000); // Keyword disappears after 1 second
      }, 1500); // Show keyword every 1.5 seconds

      return () => clearInterval(interval); // Clean up
    }
  }, [isGameActive]);

  return (
    <>
      <div className="text-center">
        <button className="bg-slate-400 rounded-md px-2 py-1">
          <Link to={"/"}>go back to home</Link>
        </button>
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Hit The Box Game</h1>

        {/* Game Board */}
        <div className="grid grid-cols-3 gap-2 mb-6">
          {boxes.map((_, index) => (
            <div
              key={index}
              className={`h-24 w-24 border rounded-lg flex items-center justify-center text-lg font-bold cursor-pointer ${
                activeBox === index ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => handleBoxClick(index)}
            >
              {activeBox === index ? "HIT" : ""}
            </div>
          ))}
        </div>

        {/* Score and Timer */}
        <div className="text-lg mb-4">
          <p>
            Score: <span className="font-bold">{score}</span>
          </p>
          <p>
            Time Left: <span className="font-bold">{timeLeft}s</span>
          </p>
        </div>

        {/* Start/Restart Button */}
        {!isGameActive && (
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            onClick={startGame}
          >
            {timeLeft === 0 ? "Restart Game" : "Start Game"}
          </button>
        )}

        {/* Final Score */}
        {timeLeft === 0 && (
          <p className="mt-4 text-xl font-bold text-red-600">
            Game Over! Final Score: {score}
          </p>
        )}
      </div>
    </>
  );
};

export default HitTheBoxGame;
