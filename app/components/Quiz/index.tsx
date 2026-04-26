"use client"
import React, { useState, useEffect } from 'react';
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
            "Ambiente que estimula a inovação e talento",
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
    const [isSending, setIsSending] = useState(false);

    const handleStart = () => setStep(1);

    const handleAnswer = (index: number) => {
        setSelected(index);
        setTimeout(() => {
            if (index === quizData[currentQ].correct) {
                setScore(s => s + 1);
            }
            setStep(2);
        }, 300);
    };

    const handleNext = () => {
        if (currentQ < quizData.length - 1) {
            setCurrentQ(c => c + 1);
            setSelected(null);
            setStep(1);
        } else {
            setStep(3);
            sendToGoogleSheets();
        }
    };

    const sendToGoogleSheets = async () => {
        // Esta função enviará os dados para o Google Apps Script se o URL estiver configurado
        const SCRIPT_URL = ""; // Usuário deve inserir aqui após configurar o script
        if (!SCRIPT_URL) return;

        setIsSending(true);
        try {
            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                cache: 'no-cache',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    date: new Date().toLocaleString(),
                    score: score,
                    total: quizData.length,
                    percentage: (score / quizData.length) * 100 + "%"
                })
            });
        } catch (e) {
            console.error("Erro ao enviar para Google Sheets", e);
        }
        setIsSending(false);
    };

    return (
        <section id="quiz" className="bg-[#f8fafc] py-20 px-4">
            <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden min-h-[500px] flex flex-col md:flex-row">
                
                {/* LADO ESQUERDO: Pergunta e Info */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
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
                                className="space-y-8"
                            >
                                <div className="flex justify-between items-center">
                                    <span className="text-slategray font-bold uppercase tracking-wider">Pergunta {currentQ + 1}/{quizData.length}</span>
                                    <div className="flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-full border border-yellow-100">
                                        <Image src="/assets/quiz/coin.svg" width={24} height={24} alt="Coin" className="animate-pulse" />
                                        <span className="font-bold text-yellow-700">{score} Coins</span>
                                    </div>
                                </div>

                                <motion.h2 
                                    key={currentQ}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-3xl md:text-4xl font-bold text-midnightblue leading-snug"
                                >
                                    {quizData[currentQ].question}
                                </motion.h2>

                                {/* ÍCONE 8-BIT DINÂMICO */}
                                <motion.div 
                                    animate={{ 
                                        y: [0, -10, 0],
                                        rotate: [0, 5, -5, 0]
                                    }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-32 h-32 opacity-20"
                                >
                                    <Image src={quizData[currentQ].icon} width={128} height={128} alt="8-bit icon" />
                                </motion.div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div 
                                key="final"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center md:text-left space-y-6"
                            >
                                <div className="flex justify-center md:justify-start">
                                    <Image src="/assets/quiz/coin.svg" width={100} height={100} alt="Final Coin" className="animate-bounce" />
                                </div>
                                <h2 className="text-4xl font-bold text-midnightblue">Incrível!</h2>
                                <p className="text-xl text-slategray">
                                    Você acumulou <strong>{score} Creative Coins</strong>. <br />
                                    Isso mostra que você tem um potencial criativo gigante para ser um profissional do futuro.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <a 
                                        href={`https://wa.me/5581991337935?text=Olá! Fiz o Quiz Criativo e ganhei ${score} Creative Coins! Quero saber mais sobre os cursos.`}
                                        target="_blank"
                                        className="bg-[#b5f78b] text-[#204906] px-8 py-4 rounded-full font-bold text-center"
                                    >
                                        Resgatar Bônus via WhatsApp
                                    </a>
                                    <button 
                                        onClick={() => window.location.reload()}
                                        className="text-slategray font-medium hover:underline"
                                    >
                                        Tentar novamente
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* LADO DIREITO: Opções ou Feedback */}
                <div className="w-full md:w-1/2 p-8 md:p-12 bg-gray-50 flex items-center justify-center border-l border-gray-100">
                    <AnimatePresence mode="wait">
                        {step === 0 && (
                             <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="relative w-full aspect-square max-w-[300px]"
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
                                        className="bg-white p-6 rounded-2xl shadow-sm border-2 border-transparent hover:border-epec-blue hover:shadow-md transition-all aspect-square flex items-center justify-center text-center font-bold text-midnightblue md:text-lg"
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
                                className="w-full space-y-6 text-center md:text-left"
                            >
                                <div className="flex items-center gap-4 justify-center md:justify-start">
                                    <Image src="/assets/quiz/check.svg" width={48} height={48} alt="Check" />
                                    <h3 className="text-3xl font-black text-epec-blue uppercase italic tracking-tighter">Arrasou!</h3>
                                </div>
                                <div className="bg-white p-8 rounded-3xl shadow-inner border border-gray-100">
                                    <p className="text-sm uppercase font-bold text-slategray mb-2">Explicação:</p>
                                    <p className="text-lg text-midnightblue font-medium">
                                        {quizData[currentQ].explanation}
                                    </p>
                                </div>
                                <button 
                                    onClick={handleNext}
                                    className="w-full bg-midnightblue text-white py-5 rounded-2xl font-bold text-xl hover:bg-black transition-colors"
                                >
                                    Próxima Pergunta
                                </button>
                            </motion.div>
                        )}

                        {step === 3 && (
                             <motion.div 
                                initial={{ opacity: 0, rotateY: 180 }}
                                animate={{ opacity: 1, rotateY: 0 }}
                                className="bg-white p-10 rounded-full shadow-2xl border-8 border-yellow-400"
                             >
                                <div className="text-center">
                                    <p className="text-6xl font-black text-yellow-600">+{score}</p>
                                    <p className="font-bold text-yellow-700 uppercase tracking-widest text-sm">Coins</p>
                                </div>
                             </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Quiz;
