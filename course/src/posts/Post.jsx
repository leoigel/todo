import React, { useState } from 'react';

import './posts.css'

function Post({post}) {
  return (
    <>
    
    <div className='post'>
        Title :{post.title} <br/>
        Body :{post.body}
    </div>
    </>
  )
}

export default Post