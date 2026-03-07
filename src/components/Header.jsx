import React from 'react'

function Header({ totalCount }) {
  return (
    <header className="bg-[#111118] border-b border-[#2a2a3a] sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-[#7c6af7]/15 border border-[#7c6af7] flex items-center justify-center text-[#7c6af7]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <div>
            <h1 className="font-bold text-xl text-[#f0f0f8] tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
              Employee Directory
            </h1>
            <p className="text-xs text-[#55556a]">{totalCount} team members</p>
          </div>
        </div>

        <div className="w-2 h-2 rounded-full bg-[#4ade80] shadow-[0_0_8px_#4ade80] animate-pulse" />
      </div>
    </header>
  )
}

export default Header