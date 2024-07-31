import React from 'react'

const DropdownOpenTools = () => {
  return (
    <div className='flex fex-col dropdown-titles open-tools'>
         <h3>ONLINE ASSESSMENT TOOLS</h3>
           <div className='contents'>
                <span><img src="src/assets/talent.svg" alt="" />Talent Assessments</span><br />
                <p>Assess your talent holistically</p>
                <ul>
                    <li><a href=""></a>Psychometric Tests</li>
                    <li><a href=""></a>Behavioral Tests</li>
                    <li><a href=""></a>Aptitude Tests</li>
                    <li><a href=""></a>Technical Tests</li>
                    <li><a href=""></a>Communication Skills Tests</li>
                </ul>
            </div>
            <div className='contents'>
                <span><img src="src/assets/coding.svg" alt="" />Coding Assessments</span><br />
                <p>Find the best coders efficiently</p>
                <ul>
                    <li><a href=""></a>Coding Skills Tests</li>
                    <li><a href=""></a>Advanced Coding Simulators</li>
                </ul>
                <button>TEST LIBRARY</button>
            </div>
    </div>
  )
}

export default DropdownOpenTools
