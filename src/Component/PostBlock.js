import React from 'react'

function PostBlock({data}) {
    return (
        <div className="post-block">
            <div className="post-img-container">
                <img src={data.urls.small} alt={data.alt_description} />
            </div>
            <div className="post-content">
                <div className="post-user-left">
                    <img src={data.user.profile_image.small} alt={data.user.name} />
                </div>
                <div className="post-user-right">
                    <h1 className="post-user-name">{data.user.name}</h1>
                    <p className="post-user-description">{data.description}</p>
                </div>
            </div>
        </div>
    )
}

export default PostBlock
