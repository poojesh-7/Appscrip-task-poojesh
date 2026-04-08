"use client"
import { useState } from "react";
import "./HeartButton.css";

export default function HeartButton() {
    const [liked, setLiked] = useState(false);

    return (
        <button
            className={`heart ${liked ? 'liked' : ''}`}
            onClick={() => setLiked(!liked)}
        >
            {liked ? '♥' : '♡'}
        </button>
    );
}