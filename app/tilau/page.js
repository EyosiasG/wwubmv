"use client"

import { useState, useEffect } from "react";
import confetti from 'canvas-confetti';
import { Dancing_Script } from "next/font/google";
import { Caveat } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ['latin'] });
const caveat = Caveat({ subsets: ['latin'] });

export default function Page() {
    const [backgroundElements, setBackgroundElements] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showConfetti, setShowConfetti] = useState(false);

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

    // Trigger confetti effect when changing slides
    useEffect(() => {
        if (showConfetti) {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
            setTimeout(() => setShowConfetti(false), 1000);
        }
    }, [showConfetti]);

    // List of 100 sweet reasons
    const loveReasons = [
        "The way your eyes light up when you smile",
        "How you make even ordinary moments special",
        "Your infectious laugh that brightens my day",
        "The way you care for others",
        "Your determination to chase your dreams",
        "How you dance :) Yes I see I see it",
        "Your kind and gentle heart",
        "The way you remember tiny details about me",
        "How you always know how to make me smile",
        "Your silly jokes that never fail to make me laugh",
        "The way you scrunch your nose when you're thinking",
        "How passionate you are about things you love",
        "Your morning bedhead that's somehow still perfect",
        "The way you sing in the shower ;) yes I know ",
        "How you're always there when I need you",
        "Your creative mind and imagination",
        "The way you get excited about little things",
        "How you make me feel safe and loved",
        "Your endless curiosity about the world",
        "The way you listen with your whole heart",
        "How you're not afraid to be yourself",
        "Your optimistic outlook on life",
        "The way you handle challenges with grace",
        "How you inspire me to be better",
        "Your thoughtfulness in everything you do",
        "The way you see beauty in simple things",
        "How you make everyone feel special",
        "Your contagious enthusiasm",
        "The way you forgive and forget",
        "How you always try your best",
        "Your amazing hugs that feel like home",
        "The way you support my dreams",
        "How you remember important dates",
        "Your ability to find solutions",
        "The way you express your love",
        "How you make me laugh until I cry",
        "Your dedication to growth",
        "The way you handle stress with grace",
        "How you always see the best in people",
        "Your quirky habits",
        "The way you say 'good morning'",
        "How you celebrate my victories",
        "Your patience with my flaws",
        "The way you show appreciation",
        "How you make time for what matters",
        "Your genuine interest in my day",
        "The way you handle surprises ;) Ik im the worst a it lol",
        "How you remember my favorites",
        "Your spontaneous acts of kindness",
        "The way you express yourself",
        "How you make decisions with care",
        "Your commitment to your goals",
        "The way you share your feelings",
        "How you make every day special",
        "Your incredible strength",
        "The way you overcome obstacles",
        "How you inspire others",
        "Your beautiful soul",
        "The way you show empathy",
        "How you make me feel understood",
        "Your amazing cooking experiments (Indomie ;) )",
        "The way you pursue your passions",
        "How you make me feel complete",
        "Your wonderful sense of adventure",
        "The way you embrace change",
        "How you face challenges",
        "Your incredible resilience",
        "The way you spread happiness",
        "How you make your house a home",
        "Your wonderful imagination",
        "The way you solve problems",
        "How you make time for us",
        "Your beautiful perspective",
        "The way you show compassion",
        "How you celebrate life",
        "Your amazing creativity",
        "The way you express gratitude",
        "How you make memories special",
        "Your wonderful spirit",
        "The way you share your dreams",
        "How you brighten dark days",
        "Your incredible wisdom",
        "The way you handle success",
        "How you lift others up",
        "Your amazing determination",
        "The way you express joy",
        "How you make life beautiful",
        "Your wonderful energy",
        "The way you show respect",
        "How you create magic moments",
        "Your incredible patience",
        "The way you share love",
        "How you make everything better",
        "Your amazing heart",
        "The way you dream big",
        "How you inspire love",
        "Your wonderful soul",
        "The way you make life special",
        "How you create happiness",
        "Your incredible spirit",
        "The way you show love",
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % loveReasons.length);
        setShowConfetti(true);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + loveReasons.length) % loveReasons.length);
        setShowConfetti(true);
    };

    // Cute GIFs for slides (add more as needed)
    const slideGifs = [
        "https://media.tenor.com/QvGxWee9o1MAAAAj/bunny-what.gif",
        "https://media1.tenor.com/m/VD1S3g0r-ZcAAAAd/swing-grey-cat.gif",
        "https://media1.tenor.com/m/Dnc0XnvsxV0AAAAd/i-love-you-thu.gif",
        "https://media.tenor.com/yG6Rp2BFLmYAAAAj/mochi-mochi-peach-cat-cat.gif",
        "https://media.tenor.com/3DyVZ7UvXn4AAAAi/tkthao219-bubududu.gif",
        "https://media1.tenor.com/m/yC5uyYRUTygAAAAC/tkthao219-tooji.gif",
        "https://media1.tenor.com/m/gTgq_uEVstQAAAAC/tkthao219-quby.gif",
        "https://media1.tenor.com/m/D75xzWpkx30AAAAC/why-hello.gif"
    ];

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

            <div className="min-h-screen bg-pink-50 p-8 flex flex-col items-center justify-center">
                <h1 className={`${dancingScript.className} text-4xl md:text-6xl text-pink-600 mb-8 text-center`}>
                    Things I Love About You
                </h1>

                <div className="max-w-2xl w-full">
                    <div className="p-8 relative">
                        {/* Slide Content */}
                        <div className="flex flex-col items-center gap-8">
                            {/* GIF Section */}
                            <div className="w-48 h-48">
                                <img 
                                    src={slideGifs[currentSlide % slideGifs.length]} 
                                    alt="Cute animation"
                                    className="rounded-lg w-full h-auto"
                                />
                            </div>

                            {/* Reason Section */}
                            <div className="text-center">
                                <div className={`${caveat.className} text-4xl text-gray-700`}>
                                    {loveReasons[currentSlide]}
                                </div>
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex justify-between mt-8">
                            <button
                                onClick={prevSlide}
                                className="px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
                            >
                                Previous
                            </button>
                            <span className="text-pink-500">
                                {currentSlide + 1} / {loveReasons.length}
                            </span>
                            <button
                                onClick={nextSlide}
                                className="px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
                            >
                                Next
                            </button>
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
                    0% { transform: translate(-50%, -50%) rotate(0deg) translateX(0) translateY(0); }
                    33% { transform: translate(-50%, -50%) rotate(120deg) translateX(100px) translateY(50px); }
                    66% { transform: translate(-50%, -50%) rotate(240deg) translateX(-50px) translateY(100px); }
                    100% { transform: translate(-50%, -50%) rotate(360deg) translateX(0) translateY(0); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.5s ease-out forwards;
                }
            `}</style>
        </>
    );
}


