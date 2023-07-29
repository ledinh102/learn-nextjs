import useSWR from 'swr'
export interface StudentDetailProps {
  studentId: string
}

export function StudentDetail({ studentId }: StudentDetailProps) {
  const { data, error, mutate, isValidating } = useSWR(`/students/${studentId}`, {
    revalidateOnFocus: false,
    dedupingInterval: 2000,
  })

  return <div>{data?.name || '--'}</div>
}
