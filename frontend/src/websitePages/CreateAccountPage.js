import React, {useState, useRef} from 'react'
import styles from '../styles/CreateAccountPage.module.css'
import { useAuth } from '../contexts/AuthContext'

const CreateAccountPage = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmationRef = useRef()
  const { signup, currentUser } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit (e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError('Passwords do not match')
    }

    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch {
      setError('Failed to create an account')
    }

    setLoading(false)
  }

  return (
        <div className={styles.container}>
          <form className={styles.form} onSubmit = {handleSubmit}>
            {JSON.stringify(currentUser.email)}
            <div>
              <h1 className={styles.signUpTitle}>Sign Up</h1>
            </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="text"
                       id="email"
                       className={styles.userInput}
                       name="email"
                       ref={emailRef}
                       placeholder="Enter your email..."
                       required
                /> <br/>
              </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password"
                     id="password"
                     className={styles.userInput}
                     name="password"
                     ref={passwordRef}
                     required
              /> <br/>
            </div>

            <div>
              <label htmlFor="passwordConfirmation">Confirm Password:</label>
              <input type="password"
                     id="passwordConfirmation"
                     className={styles.userInput}
                     name="passwordConfirmation"
                     ref={passwordConfirmationRef}
                     required
              /> <br/>
            </div>
            <div>
              <button
                name="signUpButton"
                type="submit"
                value="Sign Up"
                className={styles.signUpButton}
                disabled = {loading}
              > Sign Up
              </button>
            </div>
            <br />
            <div className={styles.signUpTitle}>
              <p> I already have an account </p>
            </div>
          </form>
        </div>
  )
}

export default CreateAccountPage
