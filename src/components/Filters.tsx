"use client";

import { useState } from "react";
import "./Filters.css"
import Arrow from "@/ui/Arrow";
const filters = [
  {
    title: "IDEAL FOR",
    options: ["Men", "Women", "Baby & Kids"],
  },
  {
    title: "OCCASION",
    options: ["Casual", "Formal", "Party", "Sports"],
  },
  {
    title: "WORK",
    options: ["Office", "Travel", "Outdoor"],
  },
  {
    title: "FABRIC",
    options: ["Cotton", "Polyester", "Wool", "Denim"],
  },
  {
    title: "SEGMENT",
    options: ["Premium", "Mid Range", "Budget"],
  },
  {
    title: "SUITABLE FOR",
    options: ["Summer", "Winter", "All Season"],
  },
  {
    title: "RAW MATERIALS",
    options: ["Leather", "Metal", "Synthetic"],
  },
  {
    title: "PATTERN",
    options: ["Solid", "Striped", "Printed", "Checked"],
  },
];
export default function Filters() {
  const [open, setOpen] = useState<string | null>("IDEAL FOR");

  return (
    <aside className="filters">
        <label className="custom-checkbox">
            <input type="checkbox" />
            <span className="checkmark"></span>
            CUSTOMIZIBLE
        </label>
        <hr></hr>
      {filters.map((section) => (
        <div key={section.title} className="filter-section">
          <div
            className="filter-header"
            onClick={() =>
              setOpen(open === section.title ? null : section.title)
            }
          >
            {section.title} <span>{open === section.title ? <Arrow inverted={true} /> : <Arrow />}</span>
          </div>

          <p className="all">All</p>
          {open === section.title && (
            <div className="filter-options">
            <p className="unselect">Unselect all</p>

            {section.options.map((opt) => (
                <label key={opt}>
                <input type="checkbox" /> {opt}
                </label>
            ))}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
}