import React from 'react'
import { PostForm, Container, PostCard } from '../Components'

function Home() {
  return (
    <div className='py-8'>
    <Container>
        <PostForm/>
        <PostCard/>
    </Container>
    </div>
  )
}

export default Home

//yeh home page hai isme header sid nav or saari users ki posts dikhengi jitn bhi hongi db me or iske top pe hoga postform or neeche honge posts (postcard), yahan pe sirf posts howo hongi sb ki edit dlt option nhi wo sb ko unke profile page pemilega
//yahn aengi saari posts jo bhi ho jisbhi user ki
//profile page pe bhi same ese hi bnega jee ye bs usme ek condtion lgadenge ke jo user login ho usne jo posts ki hain sirf wo use profile me dkehao to dkhenge ke Name e userID kisse hame conditon deni