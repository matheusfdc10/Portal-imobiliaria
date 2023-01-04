import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import { StyledLoginPage } from "./style";

const LoginPage = () => {
    const { login } = useContext(AuthContext)
    const [email, setEmail] = useState('joao123')
    const [password, setPassword] = useState('123')

    const handleLogin = async (email, password) => {
        setPassword('')
        login(email, password)
    }

    return (
        <StyledLoginPage>
            <h1 className="title">Login</h1>
            <div className="form">
                <div className="field">
                    <label htmlFor="email">E-mail:</label>
                    <input 
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label htmlFor="password">Senha:</label>
                    <input 
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="action">
                    <button onClick={() => handleLogin(email, password)}>Entrar</button>
                </div>
            </div>
        </StyledLoginPage>
    )
}

export default LoginPage;