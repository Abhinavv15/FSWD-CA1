// import React from 'react'

const TestimonialCard = () => {

    return (

        // <>
        // <p>Customer Name:{name}</p>
        // <p>Review:{text}</p>
        // </>

    <>
    <h2 style={{textAlign:"center",textDecoration:"underline"}}>Reviews</h2>
    <div style={{border:'2px solid red',marginTop:"10px",padding:"20px",display:"flex",justifyContent:"space-evenly"}}>    
        <div>
            <p>Customer Name:Messi</p>
            <p>Review: The Service Was Good</p>
        </div>
        <div>
            <p>Customer Name:Ronaldo</p>
            <p>Review: The Service Was Great</p>
        </div>
    </div>
    </>
    )
}

export default TestimonialCard