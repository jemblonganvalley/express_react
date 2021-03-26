import React from 'react'
import { useParams } from 'react-router'

const Test = () => {

    const {slug} = useParams()
    return (
        <div>
            <h1>{slug}</h1>
        </div>
    )
}

export default Test
