import React from 'react'
import { Redirect, useLocation } from 'react-router-dom'

export default function Dashboard() {
    const location = useLocation();
    return (
        <div>
            <h3>Bad </h3>
            {/*<Redirect to="/Login"/>*/}
            {location.pathname}
        </div>
    )
}