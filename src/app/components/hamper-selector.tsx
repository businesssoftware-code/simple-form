"use client";

import React from "react";
import { HAMPERS } from "../constant/contstant";





type Props = {
  value: string; // selected hamper id
  onChange: (id: string, price: number, name: string) => void;
};

export default function HampersSelector({ value, onChange }: Readonly<Props>) {
  return (
    <div className="max-w-3xl mx-auto">
      <p className="block text-gray-500 mb-4">
        Select Your Hamper <span className="text-red-600">*</span>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {HAMPERS.map((h) => {
          const isSelected = value === h.id;
          return (
            <button
              key={h.id}
              onClick={() => onChange(h.id, h.price, h.name)}
              className={`cursor-pointer rounded-xl border p-4 transition ${
                isSelected
                  ? "border-primary bg-white shadow-md border-2"
                  : "border-gray-300 bg-white hover:border-gray-500"
              }`}
            >
              <h3 className="font-bold text-lg">
                {h.name} – ₹{h.price}
              </h3>
              <p className="text-sm text-gray-500">{h.type}</p>

             <ul className="mt-3 list-disc list-inside text-sm text-gray-700 space-y-1">
                {h.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>

            </button>
          );
        })}
      </div>
    </div>
  );
}
