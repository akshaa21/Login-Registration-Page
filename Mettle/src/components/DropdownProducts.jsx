import React from 'react'

const DropdownProducts = () => {
  return (
    <div className='flex fex-col dropdown-titles open-tools products'>
         <h3>LEARNING AND DEVELOPMENT</h3>
           <div className='contents'>
                <span><img src="src/assets/organization.svg" alt="" />Organizational Development</span><br />
                <p>Find your own valuable empoyees</p>
                <ul>
                    <li><a href=""></a>High-Potential Identification</li>
                    <li><a href=""></a>Succession Planning</li>
                    <li><a href=""></a>Leadership Development</li>
                    <li><a href=""></a>SmartADC</li>
                </ul>
            </div>
            <div className='contents'>
                <span><img src="src/assets/360.svg" alt="" />360-Degree Feedback</span><br />
                <p>Easy to use feedback tool</p><br />
            </div> 
            <div className='contents'>
                <span><img src="src/assets/reskilling.svg" alt="" />Reskilling</span><br />
                <p>Build a future ready workforce</p>   
                <ul>
                    <li><a href=""></a>Skills Gap Analysis</li>
                    <li><a href=""></a>Learning Agility & Proximity</li>
                    <li><a href=""></a>Training Effectiveness</li>
                </ul>
                <button>TEST LIBRARY</button>
            </div>
    </div>
  )
}

export default DropdownProducts
