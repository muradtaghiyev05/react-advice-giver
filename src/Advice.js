import React from 'react'

function Advice({advice, id}) {
  return (
    <div className='advice'>
        <h1>{id}. {advice}</h1>
    </div>
  )
}

export default Advice