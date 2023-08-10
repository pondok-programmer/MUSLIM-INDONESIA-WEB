import { createContext, useContext, useState } from "react";


export const Context = createContext("")
    
export const StateContext = ({children}) => {
    
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [nomor, setNomor] = useState("")

    const [showModal, setShowModal] = useState(false)
    const [isShowPopup, setIsShowPopup] = useState(false)

    const masjidSource = "https://raw.githubusercontent.com/Faizzroi/MUSLIM-INDONESIA-WEB/8fa7b10db4712b9b0bbdd35568a80b4c7b527574/src/assets/react.svg"
    const masjidImage = "\/src\/assets\/example\/masjid.png"

return (
    <Context.Provider value={{showModal,setShowModal,isShowPopup,setIsShowPopup, masjidSource,masjidImage,email, setEmail,name, setName,password, setPassword,passwordConfirm, setPasswordConfirm,nomor, setNomor}}>
        {children}
    </Context.Provider>
)
}

export const useStateContext = () => useContext(Context)