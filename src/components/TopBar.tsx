"use client";

import { useState } from "react";
import "./TopBar.css";
import FilterButton from "@/ui/FilterButton";
import Arrow from "@/ui/Arrow";

const options = [
"Recommended",
"Newest First",
"Popular",
"Price: High to Low",
"Price: Low to High",
];

export default function TopBar({ showFilter, setShowFilter }: { showFilter: boolean; setShowFilter: (value: boolean) => void }) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("Recommended");

    const handleSelect = (option: string) => {
        setSelected(option);
        setOpen(false);
    };

    return ( 
        <div className="topbar">
        <div>
            <span className="items">3425 ITEMS</span>
            <FilterButton showFilter={showFilter} setShowFilter={setShowFilter} />
        </div> 
        <div className="dropdown">
            <button onClick={() => setOpen(!open)}>
            {selected.toUpperCase()} <Arrow />
            </button>

            {open && (
            <div className="dropdown-menu">
                {options.map((option) => (
                <div
                    key={option}
                    onClick={() => handleSelect(option)}
                    className={selected === option ? "active" : ""}
                >
                    {option}
                </div>
                ))}
            </div>
            )}
        </div>
        </div>
    );
}
