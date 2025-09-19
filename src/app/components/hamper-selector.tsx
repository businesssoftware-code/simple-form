"use client";

import React from "react";
import { HAMPERS } from "../constant/contstant";

type Props = {
  value: {id:number, quantity:number}[]; // selected hamper id

  onChange: (id: number, price: number, name: string, quantity: number) => void;
};

export default function HampersSelector({ value, onChange }: Readonly<Props>) {
  return (
    <div className="max-w-3xl mx-auto">
      <p className="block text-gray-500 mb-4">
        Select Your Diwali Hamper <span className="text-red-600">*</span>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {HAMPERS.map((h) => {

          const isSelected = value?.map(el=>el.id)?.includes(h.id);

          return (
            <div
              key={h.id}
              className={`rounded-xl border p-4 transition ${
                isSelected
                  ? "border-primary bg-white shadow-md border-2"
                  : "border-gray-300 bg-white hover:border-gray-500"
              }`}
            >
              {/* Clicking the whole card selects */}
              <div className="cursor-pointer"
              >
                <h3 className="font-bold text-lg">
                  {h.name} – ₹{h.price}
                </h3>
                <p className="text-sm text-gray-500">{h.type}</p>
                <p className="mt-3 text-sm text-gray-700">
                  {h.details.join(", ")}
                </p>
              </div>

        
                <div className="mt-2 flex items-center gap-2">
                  <label
                    htmlFor={`qty-${h.id}`}
                    className="text-sm font-medium text-gray-700"
                  >
                    Quantity:
                  </label>
                  <input
                    id={`qty-${h.id}`}
                    type="number"
                    value={value?.find(el=>el.id===h.id) ? value?.find(el=>el.id===h.id)?.quantity : ""}
                    onChange={(e) =>
                      onChange(h.id, h.price, h.name, Number(e.target.value))
                    }
                    className="w-12 border border-black rounded-md p-1 text-sm focus:outline-none focus:border-primary focus:border-2"
                  />
                </div>
         
            </div>
          );
        })}
      </div>
    </div>
  );
}
