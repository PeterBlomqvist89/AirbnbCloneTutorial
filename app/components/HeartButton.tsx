"use client";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { SafeUser } from "../types";
import useFavorite from "../hooks/useFavorite";

interface HeartButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}

const HeartButton: React.FC<HeartButtonProps> = ({
  listingId,
  currentUser,
}) => {
  const { hasFavorited, toggleFavorite } = useFavorite({
    listingId,
    currentUser,
  });

  return (
    <div
      onClick={toggleFavorite}
      className="relative hover:opacity-80 transition cursor-pointer"
      style={{ width: "28px", height: "28px" }} // Fast storlek för att matcha största hjärtat
    >
      {/* Det större hjärtat */}
      <AiOutlineHeart
        size={28}
        className="fill-white absolute top-[8px] right-[8px]" // Flytta åt höger och ner
      />
      {/* Det mindre hjärtat inuti */}
      <AiFillHeart
        size={24}
        className={`absolute top-[10px] right-[10px] ${
          hasFavorited ? "fill-rose-500" : "fill-neutral-500/70"
        }`} // Litet hjärta flyttat proportionellt
      />
    </div>
  );
};

export default HeartButton;
