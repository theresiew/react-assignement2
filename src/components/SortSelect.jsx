import React from 'react'

const SORT_OPTIONS = [
  { value: 'default',      label: 'Default Order' },
  { value: 'name-asc',     label: 'Name: A → Z' },
  { value: 'name-desc',    label: 'Name: Z → A' },
  { value: 'company-asc',  label: 'Company: A → Z' },
  { value: 'company-desc', label: 'Company: Z → A' },
]

function SortSelect({ value, onChange }) {
  return (
    <div className="relative flex items-center">
      <svg
        className="absolute left-3 text-[#55556a] pointer-events-none z-10"
        width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      >
        <line x1="3" y1="6" x2="21" y2="6"/>
        <line x1="6" y1="12" x2="18" y2="12"/>
        <line x1="9" y1="18" x2="15" y2="18"/>
      </svg>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Sort employees"
        className="appearance-none bg-[#16161f] border border-[#2a2a3a] rounded-lg py-3 pl-8 pr-9 text-[#f0f0f8] text-sm outline-none focus:border-[#7c6af7] focus:ring-2 focus:ring-[#7c6af7]/20 transition-all cursor-pointer"
      >
        {SORT_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-[#111118]">
            {opt.label}
          </option>
        ))}
      </select>

      <svg
        className="absolute right-3 text-[#55556a] pointer-events-none"
        width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
      >
        <polyline points="6 9 12 15 18 9"/>
      </svg>
    </div>
  )
}

export default SortSelect