"use client"

import { useState, useEffect } from "react";
import confetti from 'canvas-confetti';
import { Dancing_Script } from "next/font/google";
import { Caveat } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ['latin'] });
const caveat = Caveat({ subsets: ['latin'] });

export default function Surprise() {

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

            <div className="flex flex-col min-h-screen w-full items-center justify-center">


                <div className="flex flex-col items-center justify-center">
                    <h1 className={`${dancingScript.className} text-4xl mb-8 text-pink-600`}>
                        Hugggss 💗
                    </h1>
                    <div className={`${caveat.className} space-y-6 mb-8`}>
                        <img
                            className="h-[400px] hover:scale-110 transition-transform duration-300"
                            src="https://media1.tenor.com/m/UXLmgQdkDesAAAAd/robert-bri.gif"
                        />
                    </div>

                </div>

                <div className="flex flex-col items-center">
                        <div className="text-6xl animate-bounce">🥰</div>
                        <div className={`text-lg text-pink-500 mt-2 ${caveat.className}`}>
                            Hope you loved everything Boo !!
                        </div>
                </div>
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
