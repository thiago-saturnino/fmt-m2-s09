import { createContext, useState } from 'react'

export const ModalContext = createContext( {
    show: false,
    setShow: () => {},
    data: {
        title: '',
        description: ''
    },
    setData: () => {},
})

export const ModalProvider = ({ children }) => {
    const [show, setShow] = useState(false)
    const [data, setData] = useState({
        title: null,
        description: null
    })

    return (
            <ModalContext.Provider value={(show, setShow, data, setData)}>
                {children}
            </ModalContext.Provider>
    )
}
