import { StudentDetail } from '@/components/swr'
import { useState } from 'react'

export default function SWRPage() {
  const [data, setData] = useState([0, 0, 0])

  const handleAddClick = () => {
    setData([...data, 0])
  }

  return (
    <div>
      <h1>SWR layout</h1>

      <button onClick={handleAddClick}>Add item</button>

      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <StudentDetail studentId='lea11ziflg8xoiza' />
          </li>
        ))}
      </ul>
    </div>
  )
}
