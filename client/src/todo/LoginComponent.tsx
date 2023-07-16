import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function LoginComponent() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [showSucessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)

    const navigate = useNavigate()


    const handleUsernameChange = (event: any) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
    }

    const handleSubmit = () => {
        if(username=="Sambo" && password=="password") {
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
            navigate(`/welcome/${username}`)
        } else {
            setShowErrorMessage(true)
            setShowSuccessMessage(false)
        }
    }

    return (
    <div className="container">
        {showSucessMessage && <div className="successMessage">Authenticated Successfully</div>}
        {showErrorMessage && <div className="errorMessage">Authentication Failed. Please check your username/password</div>}
        <div className="LoginForm">
            <div>
                <label>User Name</label>
                <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="pasword" value={password} onChange={handlePasswordChange}/>
            </div>
            <div>
                <button type="button" name="login" onClick={handleSubmit}>Login</button>
            </div>
        </div>
    </div>
    )
}
