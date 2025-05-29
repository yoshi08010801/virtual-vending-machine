"use client";

import { useEffect, useState, useRef } from "react";



type Drink = {
  name: string;
  image: string;
  link: string;
};

export default function Home() {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [soldOut, setSoldOut] = useState<string[]>([]);

  const buttonSoundRef = useRef<HTMLAudioElement | null>(null);
  const vendingSoundRef = useRef<HTMLAudioElement | null>(null);
  const dropSoundRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    if (!localStorage.getItem("soundPopupShown")) {
      alert("🔊 Sound will play next. Click OK to continue.");
      localStorage.setItem("soundPopupShown", "true");
    }
  }, []);

  useEffect(() => {
    fetch("/drinks.json")
      .then((res) => res.json())
      .then((data) => setDrinks(data));

    buttonSoundRef.current = new Audio("/sounds/vending.mp3");
    vendingSoundRef.current = new Audio("/sounds/vending.m4a");
   

    if (buttonSoundRef.current) buttonSoundRef.current.volume = 0.02;
    if (vendingSoundRef.current) vendingSoundRef.current.volume = 0.02;
    
  }, []);

  const handleClick = (drink: Drink) => {
    if (!soldOut.includes(drink.name)) {
      if (buttonSoundRef.current) {
        buttonSoundRef.current.currentTime = 0;
        buttonSoundRef.current.play();
      }
      if (vendingSoundRef.current) {
        vendingSoundRef.current.currentTime = 0;
        vendingSoundRef.current.play();
      }

      setSoldOut((prev) => [...prev, drink.name]);

      setTimeout(() => {
        if (dropSoundRef.current) {
          dropSoundRef.current.currentTime = 0;
          dropSoundRef.current.play();
        }
        window.open(drink.link, "_blank");
      }, 800);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f111a] py-10 px-4 text-white">
      <div className="bg-black border-[6px] border-white rounded-2xl p-6 max-w-screen-md mx-auto shadow-2xl">
        <h1 className="text-lg text-green-400 font-mono text-center bg-black py-2 mb-6 rounded shadow-inner border border-green-500">
        🥤 Try a Japanese Vending Machine — Virtually!
        </h1>

        <div className="grid grid-cols-4 gap-2 sm:gap-3 px-1 sm:px-0">
          {drinks.map((drink) => {
            const isSold = soldOut.includes(drink.name);
            return (
              <button
              key={drink.name}
  onClick={() => handleClick(drink)}
  disabled={isSold}
  className={`
    w-full h-24 text-[10px] sm:text-xs font-bold uppercase tracking-wide
    rounded-xl shadow-md text-white
    flex items-center justify-center text-center
    transform transition-all duration-150 ease-in-out
    border-b-[6px] 
    ${isSold
      ? "bg-gray-500 border-b-gray-700 text-gray-200 cursor-not-allowed"
      : "bg-red-500 border-b-red-700 hover:translate-y-[2px] hover:border-b-[2px] active:translate-y-[6px] active:border-b-0"}
  `}
>
  {isSold ? "SOLD OUT" : drink.name}
</button>

            );
          })} {/* ← ここで map のコールバックを閉じる */}

        </div>
      </div>
    </div>
  );
}


