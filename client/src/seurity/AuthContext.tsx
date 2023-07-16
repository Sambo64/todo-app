import {createContext, useState} from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children}: any) => {
	const [number, setNumber] = useState(0);
	return (
		<AuthContext.Provider value={{number}}>
			{children}
		</AuthContext.Provider>
	)
}
