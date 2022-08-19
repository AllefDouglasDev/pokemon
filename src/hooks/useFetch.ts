import { useState } from 'react';

type UseFetchProps = {
    request: (data?: any) => Promise<void>
}

export const useFetch = ({ request }: UseFetchProps) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const [data, setData] = useState()

    const handleFetch = useCallback(async (data?: any) => {
        setLoading(true)
        try {
            const response = await request(data)
            setData(response.data)
        } catch (erro) {
            setError(erro.message)
        }
        setLoading(false)
    }, [])

    return { loading, error, handleFetch }
}