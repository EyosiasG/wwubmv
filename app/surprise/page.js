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

            <div className="flex flex-col min-h-screen w-full items-center justify-around mt-5">
                <div className="flex items-center justify-center">
                    <div className="p-8">
                        <img
                            src="https://media.tenor.com/K0Op-0SpsvkAAAAi/dudu-cute.gif"
                            className="h-[150px]"
                        />
                    </div>
                    <div className="text-center max-w-2xl mx-auto p-8 bg-pink-50/30 rounded-lg backdrop-blur-sm shadow-lg">
                        <>
                            <h1 className={`${dancingScript.className} text-4xl mb-8 text-pink-600`}>
                                A little poem for bunnyy🌹
                            </h1>
                            <div className={`${caveat.className} space-y-6 mb-8`}>
                                <p className="text-xl text-gray-800 animate-float">
                                    Your smile is sunshine to my soul,<br />
                                    A light that warms, makes me whole.<br />
                                    Your touch, a balm so soft, so true,<br />
                                    Brings peace, like dawn's refreshing dew.
                                </p>
                                <p className="text-xl text-gray-800 animate-float" style={{ animationDelay: '0.5s' }}>
                                    Your eyes, like pools of deep blue light,<br />
                                    Draw me in, my heart takes flight.<br />
                                    A love so pure, a warm embrace,<br />
                                    That fills my soul with gentle grace.
                                </p>
                                <p className="text-xl text-gray-800 animate-float" style={{ animationDelay: '1s' }}>
                                    Like a rose, you bloom and grow,<br />
                                    A beauty rare, a love to show. <br />
                                    In my heart, you hold a special place, <br />
                                    A quiet warmth I always embrace
                                </p>
                            </div>

                        </>
                    </div>
                    <div className="p-8">
                        <img
                            src="https://media1.tenor.com/m/8ff-P081Di4AAAAC/bubu-dudu-bubu.gif"
                            className="h-[150px]"
                        />
                    </div>

                </div>

                <a
                    href="/flowers"
                    className="mt-3 transform hover:scale-110 transition-all duration-300 cursor-pointer"
                >
                    <div className="flex flex-col items-center">
                        <div className="text-4xl animate-bounce">🎁</div>
                        <div className={`text-sm text-pink-500 mt-2 ${caveat.className}`}>
                            Ohh another one! What could it be?
                        </div>
                    </div>
                </a>
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


