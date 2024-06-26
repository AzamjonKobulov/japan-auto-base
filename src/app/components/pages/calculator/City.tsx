import React from 'react';

const options = [
  {
    label: 'С-Петербург',
  },
  {
    label: 'Москва',
  },
];

export default function City() {
  return (
    <div className="no-scroll col-span-2 lg:col-span-1 h-140 sm:h-220 space-y-3 bg-white overflow-auto rounded-10 py-4 pl-3 pr-1">
      <h4>Город</h4>
      <div className="space-y-2">
        {options.map((option) => (
          <label
            key={option.label}
            htmlFor={option.label}
            className="flex gap-1 text-sm cursor-pointer"
          >
            <input type="checkbox" id={option.label} className="hidden" />
            <div className="w-5 h-5 shrink-0 grid place-content-center bg-brand-gray-100 rounded-3">
              <span className="w-3 h-3 hidden bg-brand-red rounded-1.5"></span>
            </div>
            <p className="leading-4 sm:whitespace-nowrap">{option.label}</p>
          </label>
        ))}
      </div>
    </div>
  );
}
