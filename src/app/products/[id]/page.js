import React from 'react'

const DynamicRoute = ({ params, searchParams }) => {
    // console.log(params)
    console.log(searchParams)
    return (
        <div>
            <h2>DynamicRoute: {params.id}</h2>
            <h1>search params name : {searchParams.name}</h1>
            <h1>search params age : {searchParams.age}</h1>

        </div>
    )
}

export default DynamicRoute