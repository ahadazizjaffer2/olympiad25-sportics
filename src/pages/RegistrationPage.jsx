import React from 'react'
import Header from '../components/Register-Now/Header'
import RegistrationForm from '../components/Register-Now/RegistrationForm'
import RegistrationClosedNotice from '../components/Register-Now/RegistrationClosedNotice'

const RegistrationPage = () => {
  return (
    <div>
      <Header />
      {/* <RegistrationForm/> */}
      <RegistrationClosedNotice/>
    </div>
  )
}

export default RegistrationPage