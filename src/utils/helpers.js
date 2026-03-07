/**
 * Filter employees by name or email query
 */
export function filterEmployees(employees, query) {
  if (!query.trim()) return employees
  const lower = query.toLowerCase()
  return employees.filter(
    ({ name, email }) =>
      name.toLowerCase().includes(lower) ||
      email.toLowerCase().includes(lower)
  )
}

/**
 * Sort employees by a given field
 */
export function sortEmployees(employees, sortBy) {
  const sorted = [...employees]
  switch (sortBy) {
    case 'name-asc':
      return sorted.sort((a, b) => a.name.localeCompare(b.name))
    case 'name-desc':
      return sorted.sort((a, b) => b.name.localeCompare(a.name))
    case 'company-asc':
      return sorted.sort((a, b) => a.company.name.localeCompare(b.company.name))
    case 'company-desc':
      return sorted.sort((a, b) => b.company.name.localeCompare(a.company.name))
    default:
      return sorted
  }
}

/**
 * Get initials from a full name
 */
export function getInitials(name) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

/**
 * Generate a consistent color based on employee ID
 */
export function getAvatarColor(id) {
  const colors = [
    '#7c6af7', '#f76a8c', '#6af7c8', '#f7c46a',
    '#6ab4f7', '#f76ac8', '#a8f76a', '#f7896a',
    '#6af7f0', '#d46af7',
  ]
  return colors[(id - 1) % colors.length]
}