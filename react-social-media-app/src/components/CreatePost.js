import React from "react";

function CreatePost({ user, handleAddPost}) {
    const [content, setContent] = React.useState('');
    const [image, setImage] = React.useState(null);
    const imageInputRef = React.useRef();
    
    function handleSubmit(event) {
        event.preventDefault();
        const post = { content, image, user };
        handleAddPost(post);
        // const newPosts = [post, ...posts];
        // setPosts(newPosts);
        setContent('');
        imageInputRef.current.value = '';
    }

    return <div onSubmit={handleSubmit}>
        <h1>Create New Post</h1>
        <form>
            <input 
                type='text' placeholder='Add Post Content'
                onChange={event => setContent(event.target.value)}
                value={content}
            />
            <input 
                type='file'
                onChange={event => setImage(event.target.files[0])}
                ref={imageInputRef}
            />
            <button type='Submit'>Submit Post</button>
        </form>
        <p>{content}</p>
        </div>;
}

export default CreatePost;