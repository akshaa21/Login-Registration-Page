import React from 'react'

const DropdownResources = () => {
  return (
    <div className='flex fex-col dropdown-titles open-tools resources'>
         <h3>Resources</h3>
           <div className='contents'>
                <span><img src="src/assets/resource.svg" alt="" />Resources Library</span><br />
                <p>Explore And Address The Latest Advancements In Assessments,<br/> Online Exams, Hiring, And L&D</p><br/>
                <ul>
                    <li><a href=""></a>E-Books</li>
                    <li><a href=""></a>Research & Reports</li>
                    <li><a href=""></a>Client Success Stories</li>
                    <li><a href=""></a>Webinar Recordings</li>
                </ul>
            </div>
            <div className='contents'>
                <span><img src="src/assets/guide.svg" alt="" />Guides & Blogs</span><br />
                <p>Get the latest HR technology trends from the experts in talent assessment and management</p><br /><br /><br />
            </div>
    </div>
  )
}

export default DropdownResources
