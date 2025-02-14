"use client"

import { useState, useEffect } from "react";
import confetti from 'canvas-confetti';
import { Dancing_Script } from "next/font/google";
import { Caveat } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ['latin'] });
const caveat = Caveat({ subsets: ['latin'] });

export default function Page() {

    // Add new state for background elements
    const [backgroundElements, setBackgroundElements] = useState([]);
    // Add new state for time difference
    const [timeSince, setTimeSince] = useState({});

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

    // Add new useEffect for timer
    useEffect(() => {
        const startDate = new Date('2024-11-13');
        
        const updateTimer = () => {
            const now = new Date();
            const difference = now - startDate;
            
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            
            setTimeSince({ days, hours, minutes, seconds });
        };

        // Update immediately and then every second
        updateTimer();
        const timer = setInterval(updateTimer, 1000);

        return () => clearInterval(timer);
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

            {/* Updated timer display */}
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center p-8">
                    <h1 className={`${dancingScript.className} text-4xl md:text-5xl text-pink-600 mb-8`}>
                        Time Since We First Met
                    </h1>
                    <div className="flex gap-4 justify-center">
                        <div className="flex flex-col items-center">
                            <div className="bg-pink-100 rounded-lg p-4 w-24 h-24 flex items-center justify-center border-2 border-pink-300">
                                <span className={`${caveat.className} text-4xl text-pink-600`}>
                                    {timeSince.days}
                                </span>
                            </div>
                            <span className="text-pink-500 mt-2">Days</span>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="bg-pink-100 rounded-lg p-4 w-24 h-24 flex items-center justify-center border-2 border-pink-300">
                                <span className={`${caveat.className} text-4xl text-pink-600`}>
                                    {timeSince.hours}
                                </span>
                            </div>
                            <span className="text-pink-500 mt-2">Hours</span>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="bg-pink-100 rounded-lg p-4 w-24 h-24 flex items-center justify-center border-2 border-pink-300">
                                <span className={`${caveat.className} text-4xl text-pink-600`}>
                                    {timeSince.minutes}
                                </span>
                            </div>
                            <span className="text-pink-500 mt-2">Minutes</span>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="bg-pink-100 rounded-lg p-4 w-24 h-24 flex items-center justify-center border-2 border-pink-300">
                                <span className={`${caveat.className} text-4xl text-pink-600`}>
                                    {timeSince.seconds}
                                </span>
                            </div>
                            <span className="text-pink-500 mt-2">Seconds</span>
                        </div>
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
