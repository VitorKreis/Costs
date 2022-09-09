import './Message.css'

import { useState, useEffect } from "react"


function Message({msg, type}){


    const [visible, setVisible] = useState(false)

    useEffect(()=>{
        if(!msg){
            setVisible(false)
            return
        }
        setVisible(true)

        const time = setTimeout(() => {
            setVisible(false)
        }, 3000)


        return () => clearTimeout(time)

    }, [msg])
    return(
        <>
        {visible && (
            <div className={`message ${type}`}>
                <p>{msg}</p>
            </div>
        )}
        </>
        
    )

}


export default Message


