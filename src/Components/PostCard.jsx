import React, {useId} from 'react'
import {Link} from 'react-router-dom'
import service from '../AppWrite/DBServices'
import authservice from '../Appwrite/AuthService'


function PostCard({

    $id,
    content,
     featuredImage,
     Name
}) {
  return (
 
   <Link to={`/post/${$id}`}>
  <div className="w-full px-4 py-3 border-y border-white/40 hover:bg-white/5 transition border-t-0">

    {/* Author name */}
    <div className="flex items-center mb-1">
      <p className="text-sm font-semibold text-white">
        {Name}
      </p>
    </div>

    {/* Content */}
    <p className="text-base text-white leading-snug mb-3 whitespace-pre-wrap">
      {content}
    </p>

    {/* Image */}
    {featuredImage && (
      <div className="w-full max-h-420px overflow-hidden rounded-xl">
        <img
          src={service.fileprev(featuredImage)}
          alt={content}
          className="w-full h-full object-cover"
        />
      </div>
    )}

  </div>
</Link>

  )
}

export default PostCard