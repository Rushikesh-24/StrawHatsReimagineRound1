"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval: any;

type Card = {
  id: number;
  lineImg: string;
  selectImg: string;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 10000);
  };

  return (
    <div className="relative h-[60vh] lg:w-80 md:h-60 md:w-60 flex justify-center">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute sm:h-60 h-52 sm:w-60 w-32 lg:h-[60vh] md:h-72 lg:w-80 md:w-52 rounded-3xl overflow-hidden shadow-2xl shadow-[#03062A] flex flex-col justify-between"
            animate={{
              right: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
            }}
          >
            <img src={card.lineImg} alt="camImg" className="size-full hover:opacity-0"/>
            <img src={card.selectImg} alt="camImg" className="size-full absolute hover:opacity-100 opacity-0 transition-all"/>
          </motion.div>
        );
      })}
    </div>
  );
};
