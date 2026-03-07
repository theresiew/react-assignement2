import React, { useState, useMemo } from 'react'
import { useEmployees } from './hooks/useEmployees'
import { filterEmployees, sortEmployees } from './utils/helpers'
import EmployeeCard from './components/EmployeeCard'
import SkeletonCard from './components/SkeletonCard'
import SearchBar from './components/SearchBar'
import SortSelect from './components/SortSelect'
import Header from './components/Header'

function App() {
  const { employees, loading, error } = useEmployees()
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('default')

  const displayedEmployees = useMemo(() => {
    const filtered = filterEmployees(employees, searchQuery)
    return sortEmployees(filtered, sortBy)
  }, [employees, searchQuery, sortBy])

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex flex-col">
      <Header totalCount={employees.length} />

      <main className="flex-1 max-w-7xl mx-auto w-full px-8 py-8">

        {/* Toolbar */}
        <div className="flex items-center gap-3 mb-8 flex-wrap">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            resultCount={displayedEmployees.length}
          />
          <SortSelect value={sortBy} onChange={setSortBy} />
        </div>

        {/* Error */}
        {error && (
          <div className="flex items-start gap-4 bg-red-500/10 border border-red-500/30 rounded-2xl p-5 text-red-300 max-w-lg" role="alert">
            <svg className="flex-shrink-0 mt-0.5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <div>
              <strong className="block font-semibold text-red-400 mb-1">Failed to load employees</strong>
              <p className="text-sm opacity-80">{error}</p>
            </div>
          </div>
        )}

        {/* Loading skeletons */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {Array.from({ length: 10 }, (_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && displayedEmployees.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-[#55556a] gap-4">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <h3 className="text-lg font-semibold text-[#8888aa]" style={{ fontFamily: 'Syne, sans-serif' }}>No employees found</h3>
            <p className="text-sm">Try adjusting your search query.</p>
          </div>
        )}

        {/* Employee grid */}
        {!loading && !error && displayedEmployees.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {displayedEmployees.map((employee) => (
              <EmployeeCard key={employee.id} employee={employee} />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-[#2a2a3a] text-xs text-[#55556a]">
        Data from{' '}
        <a href="https://jsonplaceholder.typicode.com" target="_blank" rel="noreferrer" className="text-[#7c6af7] hover:underline">
          JSONPlaceholder
        </a>{' '}
        · Built with React + Vite + Tailwind
      </footer>
    </div>
  )
}

export default App