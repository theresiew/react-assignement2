import { useState, useEffect } from 'react'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

export function useEmployees() {
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch(API_URL)
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`)
        }
        const data = await response.json()
        setEmployees(data)
      } catch (err) {
        setError(err.message || 'Something went wrong while fetching employees.')
      } finally {
        setLoading(false)
      }
    }

    fetchEmployees()
  }, [])

  return { employees, loading, error }
}