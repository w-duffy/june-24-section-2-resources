import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postTweetThunk } from './store/tweet';


export default function PostTweet() {

    const dispatch = useDispatch();
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();
        const newTweet = { message };

        dispatch(postTweetThunk(newTweet));

        setMessage('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Post a tweet!</h1>

            <input
                placeholder="What's on your mind?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button>Tweet!</button>
        </form>
    );
}
