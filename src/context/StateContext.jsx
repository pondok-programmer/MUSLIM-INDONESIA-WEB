import { createContext, useContext, useState } from "react";


export const Context = createContext("")
    
export const StateContext = ({children}) => {
    
    // const [email, setEmail] = useState("")
    const [defaultName, setDefaultName] = useState("")
    const [defaultUserName, setDefaultUserName] = useState("")
    const [defaultPhoto, setDefaultPhoto] = useState("")
    const [token, setToken] = useState("")
    const [role, setRole] = useState("")
    const [globalTarget, setGlobalTarget] = useState(null)
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [nomor, setNomor] = useState("")

    const [showModal, setShowModal] = useState(false)
    const [isShowPopup, setIsShowPopup] = useState(false)
    const [maskStatus, setMaskStatus] = useState(false)

    const masjidSource = "https://raw.githubusercontent.com/Faizzroi/MUSLIM-INDONESIA-WEB/8fa7b10db4712b9b0bbdd35568a80b4c7b527574/src/assets/react.svg"
    const masjidImage = "\/src\/assets\/example\/masjid.png"

return (
    <Context.Provider value={{showModal,setShowModal,isShowPopup,setIsShowPopup, masjidSource,masjidImage, password, setPassword, passwordConfirm, setPasswordConfirm, nomor, setNomor, globalTarget, setGlobalTarget, maskStatus, setMaskStatus}}>
        {children}
    </Context.Provider>
)
}

export const useStateContext = () => useContext(Context)