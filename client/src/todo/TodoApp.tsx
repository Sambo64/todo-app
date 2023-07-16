import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";
import {BrowserRouter, Route, Routes} from "react-router-dom"

import "./TodoApp.css";
import ErrorComponent from "./ErrorComponent";
import {ListTodoComponent} from "./ListTodoComponent";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {LogoutComponent} from "./LogoutComponent";
import {AuthProvider} from "../seurity/AuthContext";

function TodoApp() {
    return(
        <div className="TodoApp">
            <AuthProvider>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<LoginComponent />}/>
                    <Route path='/login' element={<LoginComponent />}/>
                    <Route path='/welcome/:username' element={<WelcomeComponent />}/>
                    <Route path='/todos' element={<ListTodoComponent />}/>
                    <Route path='/logout' element={<LogoutComponent />}/>
                    <Route path='*' element={<ErrorComponent/>}/>
                </Routes>
                <Footer />
            </BrowserRouter>
            </AuthProvider>

        </div>
    )
}

export default TodoApp
