import React from 'react'

function SkeletonCard() {
  return (
    <div className="bg-[#16161f] border border-[#2a2a3a] rounded-2xl p-6 flex flex-col gap-0 animate-pulse">
     
      <div className="flex items-start gap-4 mb-1">
        <div className="w-14 h-14 rounded-xl bg-[#2a2a3a] flex-shrink-0" />
        <div className="flex-1 flex flex-col gap-2 pt-1">
          <div className="h-3 bg-[#2a2a3a] rounded w-2/3" />
          <div className="h-3 bg-[#2a2a3a] rounded w-2/5" />
        </div>
        <div className="w-10 h-6 bg-[#2a2a3a] rounded-md flex-shrink-0" />
      </div>

      <div className="h-px bg-[#2a2a3a] my-4" />

      <div className="flex flex-col gap-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="w-5 h-5 bg-[#2a2a3a] rounded flex-shrink-0" />
            <div className="flex-1 flex flex-col gap-1">
              <div className="h-2 bg-[#2a2a3a] rounded w-1/4" />
              <div className="h-3 bg-[#2a2a3a] rounded w-3/5" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2 mt-5 pt-4 border-t border-[#2a2a3a]">
        <div className="flex-1 h-9 bg-[#2a2a3a] rounded-lg" />
        <div className="flex-1 h-9 bg-[#2a2a3a] rounded-lg" />
      </div>

    </div>
  )
}

export default SkeletonCard