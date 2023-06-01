import React from 'react'


const PageHeader = ({name}) => {
  return (
    <>
      <div className='pageTitle'>
        <p>Page</p>
        <h2>{name}</h2>
      </div>
    </>
  )
}

export default PageHeader
