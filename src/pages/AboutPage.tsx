import React from 'react'
import { useNavigate } from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const navigate = useNavigate()

    return (
        <>
            <h1>Page of information</h1>
            <p>Write something</p>
            <button className="btn" onClick={() => navigate('/')}>
                Back to list
            </button>
        </>
    )
}
