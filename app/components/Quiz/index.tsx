"use client"
import React, { useState, Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Question {
    question: string;
    options: string[];
    correct: number;
    explanation: string;
    icon: string;
}

const quizData: Question[] = [
    {
        question: "O que é o 'Pensamento Lateral' na economia criativa?",
        options: [
            "Pensar de forma linear",
            "Abordar problemas por ângulos inesperados",
            "Seguir apenas padrões de mercado",
            "Focar exclusivamente em lucro"
        ],
        correct: 1,
        explanation: "O pensamento lateral envolve resolver problemas através de uma abordagem indireta e criativa.",
        icon: "/assets/quiz/idea.svg"
    },
    {
        question: "Qual dessas é uma característica essencial de uma 'Cidade Criativa'?",
        options: [
            "Apenas ter tecnologia de ponta",
            "Baixo incentivo cultural",
            "Ambiente que estimula a inovação",
            "Isolamento de artistas locais"
        ],
        correct: 2,
        explanation: "Cidades criativas utilizam o potencial criativo de seus cidadãos para o desenvolvimento socioeconômico.",
        icon: "/assets/quiz/idea.svg"
    },
    {
        question: "O que significa o termo 'Serendipidade'?",
        options: [
            "Um erro planejado",
            "Descoberta afortunada por acaso",
            "Técnica de cópia",
            "Falta de criatividade"
        ],
        correct: 1,
        explanation: "Serendipidade é o ato de descobrir algo valioso enquanto se procurava por outra coisa.",
        icon: "/assets/quiz/idea.svg"
    },
    {
        question: "Quem é considerado o pai do Brainstorming?",
        options: [
            "Steve Jobs",
            "Alex Osborn",
            "Albert Einstein",
            "Pablo Picasso"
        ],
        correct: 1,
        explanation: "Alex Osborn introduziu o termo e a técnica em 1948 para estimular a geração de ideias em grupo.",
        icon: "/assets/quiz/idea.svg"
    },
    {
        question: "Qual cor é frequentemente associada à inovação e criatividade?",
        options: [
            "Cinza",
            "Marrom",
            "Laranja",
            "Preto"
        ],
        correct: 2,
        explanation: "O laranja combina a energia do vermelho e a alegria do amarelo, sendo um estímulo à criatividade.",
        icon: "/assets/quiz/idea.svg"
    }
];

const Quiz = () => {
    const [step, setStep] = useState(0); // 0: Start, 1: Question, 2: Feedback, 3: Final
    const [currentQ, setCurrentQ] = useState(0);
    const [score, setScore] = useState(0);
    const [selected, setSelected] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const handleStart = () => setStep(1);

    const handleAnswer = (index: number) => {
        setSelected(index);
        const correct = index === quizData[currentQ].correct;
        setIsCorrect(correct);
        if (correct) {
            setScore(s => s + 1);
        }
        setTimeout(() => setStep(2), 500);
    };

    const handleNext = () => {
        if (currentQ < quizData.length - 1) {
            setCurrentQ(c => c + 1);
            setSelected(null);
            setIsCorrect(null);
            setStep(1);
        } else {
            setStep(3);
            sendToGoogleSheets();
        }
    };

    const sendToGoogleSheets = async () => {
        const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyM8-z8_CbOl4F7iKfrH4P-k4NfyzDmM7gjxjezJoCsV4KUMjzjdcTHuqocEZWwN7xT/exec";
        try {
            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    date: new Date().toLocaleString(),
                    score: score,
                    total: quizData.length,
                    percentage: (score / quizData.length) * 100 + "%"
                })
            });
        } catch (e) { console.error(e); }
    };

    return (
        <section id="quiz" className="bg-[#f8fafc] py-20 px-4">
            <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden min-h-[580px] flex flex-col md:flex-row relative">
                
                {/* LADO ESQUERDO: Pergunta e Info */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white z-10">
                    <AnimatePresence mode="wait">
                        {step === 0 && (
                            <motion.div 
                                key="start"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="space-y-6"
                            >
                                <h3 className="text-slategray text-sm font-bold tracking-widest uppercase">Desafio EPEC</h3>
                                <h2 className="text-4xl md:text-5xl font-extrabold text-midnightblue leading-tight">
                                    Teste seu <span className="text-epec-blue">DNA Criativo</span>
                                </h2>
                                <p className="text-lg text-slategray opacity-80">
                                    Responda 5 perguntas rápidas e ganhe suas primeiras Creative Coins!
                                </p>
                                <button 
                                    onClick={handleStart}
                                    className="bg-epec-blue text-white px-10 py-4 rounded-full font-bold text-xl hover:shadow-lg transition-all"
                                >
                                    Começar Quiz
                                </button>
                            </motion.div>
                        )}

                        {(step === 1 || step === 2) && (
                            <motion.div 
                                key="question-info"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="space-y-8 h-full flex flex-col justify-center"
                            >
                                <div className="flex justify-between items-center">
                                    <span className="text-slategray font-bold uppercase tracking-wider text-xs md:text-sm">Pergunta {currentQ + 1}/{quizData.length}</span>
                                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border-2 border-midnightblue shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                        <Image src="/assets/quiz/coin.svg" width={20} height={20} alt="Coin" className="animate-pulse" />
                                        <span className="font-bold text-midnightblue text-sm">{score} coins</span>
                                    </div>
                                </div>

                                <motion.h2 
                                    key={currentQ}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-2xl md:text-3xl font-bold text-midnightblue leading-snug min-h-[80px]"
                                >
                                    {quizData[currentQ].question}
                                </motion.h2>

                                {/* ÍCONE 8-BIT DINÂMICO */}
                                <motion.div 
                                    animate={{ 
                                        y: [0, -10, 0],
                                        scale: [1, 1.05, 1]
                                    }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-24 h-24 md:w-32 md:h-32 pt-4"
                                >
                                    <Image src={quizData[currentQ].icon} width={128} height={128} alt="8-bit icon" className="object-contain" />
                                </motion.div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div 
                                key="final-left"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="space-y-6 flex flex-col justify-center h-full"
                            >
                                <div className="flex justify-start">
                                    <Image src="/assets/quiz/glasses.svg" width={100} height={40} alt="Glasses" className="object-contain mb-4" />
                                </div>
                                <h2 className="text-4xl md:text-5xl font-extrabold text-midnightblue">Incrível</h2>
                                <p className="text-lg text-slategray leading-relaxed max-w-md">
                                    Você acumulou <strong>{score} creative coins</strong>. <br />
                                    Isso mostra que você tem um potencial criativo gigante para ser um profissional do futuro.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-6 items-center">
                                    <a 
                                        href={`https://wa.me/5581991337935?text=Olá! Fiz o Quiz Criativo e ganhei ${score} Creative Coins! Quero saber mais sobre os cursos.`}
                                        target="_blank"
                                        className="bg-[#b5f78b] text-[#204906] px-8 py-3 rounded-full font-bold text-center w-full sm:w-auto shadow-sm hover:brightness-105 transition-all"
                                    >
                                        Resgatar Bonus via whatsapp
                                    </a>
                                    <button 
                                        onClick={() => window.location.reload()}
                                        className="text-slategray font-medium hover:underline text-sm"
                                    >
                                        Tentar novamente
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* DIVISOR VERTICAL */}
                <div className="hidden md:block w-[2px] bg-[#b9c7d2]/50 h-auto self-stretch my-12" />

                {/* LADO DIREITO: Opções ou Feedback */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex items-center justify-center relative bg-white">
                    <AnimatePresence mode="wait">
                        {step === 0 && (
                             <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="relative w-full aspect-square max-w-[280px]"
                             >
                                <Image src="/assets/quiz/coin.svg" fill alt="Logo Coin" className="object-contain" />
                             </motion.div>
                        )}

                        {step === 1 && (
                            <motion.div 
                                key="options"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="grid grid-cols-2 gap-4 w-full"
                            >
                                {quizData[currentQ].options.map((opt, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleAnswer(idx)}
                                        className={`p-4 md:p-6 rounded-2xl shadow-sm border-2 transition-all aspect-square flex items-center justify-center text-center font-bold text-midnightblue text-sm md:text-base leading-tight
                                            ${selected === idx ? 'border-midnightblue' : 'border-transparent bg-[#fcf4d9] hover:brightness-95'}
                                        `}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div 
                                key="feedback"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="w-full space-y-6"
                            >
                                <div className="flex items-center gap-4 justify-center md:justify-start">
                                    <Image src={isCorrect ? "/assets/quiz/check.svg" : "/assets/quiz/idea.svg"} width={40} height={40} alt="Icon" />
                                    <h3 className={`text-3xl font-black uppercase italic tracking-tighter ${isCorrect ? 'text-epec-blue' : 'text-red-500'}`}>
                                        {isCorrect ? 'Arrasou!' : 'Quase lá!'}
                                    </h3>
                                </div>
                                <div className={`p-8 rounded-3xl shadow-inner border ${isCorrect ? 'bg-blue-50 border-blue-100' : 'bg-red-50 border-red-100'}`}>
                                    <p className="text-xs uppercase font-bold text-slategray mb-2">Resposta certa:</p>
                                    <p className="text-lg text-midnightblue font-bold mb-4">
                                        {quizData[currentQ].options[quizData[currentQ].correct]}
                                    </p>
                                    <hr className="mb-4 opacity-20" />
                                    <p className="text-sm text-slategray leading-relaxed">
                                        {quizData[currentQ].explanation}
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <button 
                                        onClick={handleNext}
                                        className="flex-1 bg-midnightblue text-white py-4 rounded-2xl font-bold text-lg hover:bg-black transition-colors"
                                    >
                                        Próximo
                                    </button>
                                    <button 
                                        onClick={() => window.location.reload()}
                                        className="px-6 text-slategray font-medium hover:underline text-xs"
                                    >
                                        Recomeçar o quiz
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                             <motion.div 
                                key="final-right"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center space-y-6"
                             >
                                <div className="relative w-48 h-48 md:w-64 md:h-64 drop-shadow-2xl">
                                    <Image src="/assets/quiz/coin.svg" fill alt="Final Coin" className="object-contain" />
                                </div>
                                <p className="text-2xl md:text-3xl font-bold text-slategray text-center">
                                    {score} creative coins
                                </p>
                             </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Quiz;
