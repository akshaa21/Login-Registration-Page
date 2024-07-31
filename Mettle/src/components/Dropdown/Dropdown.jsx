import React from 'react'

const Dropdown = () => {
  return (
    <>
        <div className='flex flex-col dropdown-titles'>
            <ul className='flex flex-col gap-4'>
                <li><a href="">English</a></li>  
                <li><a href="">German</a></li>  
                <li><a href="">Spanish</a></li>  
                <li><a href="">Portuguese</a></li>  
                <li><a href="">Indonesian</a></li>  
                <li><a href="">French</a></li>  
            </ul> 
        </div>
    </>
  )
}

export default Dropdown;

