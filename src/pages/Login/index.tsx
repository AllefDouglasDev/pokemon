import { useFetch } from '../../hooks/useFetch'

export const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { loading, error, data, handleFetch } = useFetch({ request: authService.login })

    useEffect(() => {
        if (data) {
            setCookie(data.token)
            redirect('/home')
        }
    }, [data])

    return (
        <form onSubmit={() => handleFetch(email, password)}>
            <input type="email" />
            <input type="password" />
            <button type="submit">Enviar</button>
            {loading && <div>loading...</div>}
        </form>
    )
}