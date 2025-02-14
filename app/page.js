"use client" 

import { useState, useEffect } from "react";
import confetti from 'canvas-confetti';
import { Dancing_Script } from "next/font/google";
import { Caveat } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ['latin'] });
const caveat = Caveat({subsets: ['latin']  });

export default function Home() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const yesButtonSize = noCount * 20 + 16;

  // Add new state for background elements
  const [backgroundElements, setBackgroundElements] = useState([]);

  // Initialize background elements
  useEffect(() => {
    const elements = [];
    const symbols = ['🌸', '💝', '🌹', '💕', '💗'];
    
    // Create 15 floating elements
    for (let i = 0; i < 15; i++) {
      elements.push({
        id: i,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        animationDuration: 15 + Math.random() * 20,
        fontSize: 20 + Math.random() * 30,
      });
    }
    setBackgroundElements(elements);
  }, []);

  // Make the "No" button run away from the cursor
  const handleNoHover = () => {
    const newX = Math.random() * (window.innerWidth - 100);
    const newY = Math.random() * (window.innerHeight - 100);
    setPosition({ x: newX, y: newY });
    setNoCount(noCount + 1);
  };

  const handleYesClick = () => {
    setYesPressed(true);
    // Trigger confetti explosion
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff0000', '#ff69b4', '#ff1493']
    });
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With snickers on top",
      "What about a matcha frostie",
      "PLEASE POOKIE",
      "But Bunnnyyy :*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to Eyosias' ghost",
      "please babe",
      ":((((",
      "PRETTY PLEASE",
      "ኧረ ዊንታ ተይ",
      "No :(",
      "I'll give you a cookie",
      "You're breaking my heart 💔",
      "I'm gonna cry...",
      "Don't be mean 🥺",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <>
      {/* Add floating background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {backgroundElements.map((element) => (
          <div
            key={element.id}
            className="absolute animate-float-random"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              fontSize: `${element.fontSize}px`,
              opacity: '0.15',
              animation: `float-random ${element.animationDuration}s infinite linear`,
              transform: `translate(-50%, -50%)`,
            }}
          >
            {element.symbol}
          </div>
        ))}
      </div>

      <div className="flex min-h-screen w-full items-center justify-center">
        {yesPressed ? (
          <div className="flex flex-col my-auto items-center justify-center">
            <div className="animate-bounce">
              <img 
                src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" 
                className=""
              />
            </div>
            <div className={`my-4 text-4xl font-bold text-pink-600 animate-pulse ${dancingScript.className}`}>
              WOOOOOO bunnyy!!! I love you pookie!! ;))
            </div>
            <div className={`text-2xl text-gray-700 mt-4 ${caveat.className}`}>
              You've made me the happiest person ever! 🥰
            </div>
            <div className="flex gap-6 mt-8">
              <a 
                href="/surprise"
                className="transform hover:scale-110 transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-col items-center">
                  <div className="text-4xl animate-bounce">🎁</div>
                  <div className={`text-sm text-pink-500 mt-2 ${caveat.className}`}>
                    Click for your surprise!
                  </div>
                </div>
              </a>
              <a 
                href="/tilau"
                className="transform hover:scale-110 transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-col items-center">
                  <div className="text-4xl animate-pulse">💝</div>
                  <div className={`text-sm text-pink-500 mt-2 ${caveat.className}`}>
                    Whats this ;)
                  </div>
                </div>
              </a>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <div className="animate-float">
              <img
                className="h-[200px] hover:scale-110 transition-transform duration-300"
                src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
              />
            </div>
            <h1 className={`my-4 mt-10 text-4xl font-bold text-pink-600 animate-pulse ${dancingScript.className}`}>
              Wintaye, Will you be my Valentine? 💝
            </h1>
            <a 
              href="/howlong"
              className="transform hover:scale-110 transition-all duration-300 cursor-pointer mb-8"
            >
              <div className="flex flex-col items-center">
                <div className="text-4xl animate-pulse">⏰</div>
                <div className={`text-sm text-pink-500 mt-2 ${caveat.className}`}>
                  But First, Want to know how long have we known each other?
                </div>
              </div>
            </a>
            <div className="flex items-center">
              <button
                className={`mr-4 mt-10 animate-bounce rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-4 font-bold text-white hover:from-pink-600 hover:to-purple-600 transform hover:scale-110 transition-all duration-300 shadow-lg ${caveat.className}`}
                style={{ fontSize: yesButtonSize }}
                onClick={handleYesClick}
              >
                Yes 💖
              </button>
              <button
                onMouseEnter={handleNoHover}
                onClick={handleNoHover}
                className="rounded-full bg-gray-500 px-8 py-4 font-bold text-white hover:bg-gray-600 transition-all duration-300 shadow-lg"
                style={{
                  position: 'absolute',
                  left: `${position.x}px`,
                  top: `${position.y}px`,
                }}
              >
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float-random {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) translateX(0) translateY(0);
          }
          33% {
            transform: translate(-50%, -50%) rotate(120deg) translateX(100px) translateY(50px);
          }
          66% {
            transform: translate(-50%, -50%) rotate(240deg) translateX(-50px) translateY(100px);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) translateX(0) translateY(0);
          }
        }
      `}</style>
    </>
  );
}
