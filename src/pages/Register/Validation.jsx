import React from 'react'
import isEmpty from "validator/lib/isEmpty"


const Validation = (account, setAccount) => {
    const [msgValidation, setMsgValidation] = useState('')

    const msg = {}
    if (isEmpty(account.username)) {
      msg.username = "Username is required"
    }
    if (isEmpty(account.email)) {
      msg.email = "Email is required"
    }
    if (isEmpty(account.password)) {
      msg.password = "Password is required"
    }

    setMsgValidation(msg)
    if (Object.keys(msg).length > 0) return false
    return true
}

export default Validation