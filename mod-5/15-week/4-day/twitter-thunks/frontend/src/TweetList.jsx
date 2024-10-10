import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTweets } from './store/tweet';

const TweetList = () => {
    const dispatch = useDispatch();

    const tweets = useSelector((state) => state.tweets.allTweets);
    const tweetList = Object.values(tweets);


    useEffect(() => {
        dispatch(getAllTweets());
    }, [dispatch]);

    return (
        <>
            <h1>Tweet List</h1>
            {tweetList?.map(({ id, message }) => (
                <p key={id}>{message}</p>
            ))}
        </>
    );
};

export default TweetList;
