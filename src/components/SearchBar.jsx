import React from 'react'

function SearchBar({ value, onChange, resultCount }) {
  return (
    <div className="flex items-center gap-4 flex-1 min-w-0">
      <div className="relative flex-1 max-w-lg">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#55556a] pointer-events-none"
          width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>

        <input
          type="text"
          placeholder="Search by name or email..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label="Search employees"
          className="w-full bg-[#16161f] border border-[#2a2a3a] rounded-lg py-3 pl-11 pr-10 text-[#f0f0f8] text-sm placeholder-[#55556a] outline-none focus:border-[#7c6af7] focus:ring-2 focus:ring-[#7c6af7]/20 transition-all"
        />

        {value && (
          <button
            onClick={() => onChange('')}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#55556a] hover:text-[#f0f0f8] text-xs transition-colors"
          >
            ✕
          </button>
        )}
      </div>

      {value && (
        <span className="text-sm text-[#55556a] whitespace-nowrap">
          {resultCount} result{resultCount !== 1 ? 's' : ''}
        </span>
      )}
    </div>
  )
}

export default SearchBar