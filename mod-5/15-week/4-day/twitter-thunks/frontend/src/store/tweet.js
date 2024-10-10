// constant to avoid debugging typos
const GET_ALL_TWEETS = 'tweet/getAllTweets';
const POST_TWEET = 'tweet/post';

//regular action creator
const loadTweets = (tweets) => {
    return {
        type: GET_ALL_TWEETS,
        tweets,
    };
};

export const postTweet = (payload) => {
    return {
        type: POST_TWEET,
        payload,
    };
};

// thunk action creator
export const getAllTweets = () => async (dispatch) => {
    const response = await fetch('/api/tweets');

    if (response.ok) {
        const data = await response.json();
        dispatch(loadTweets(data)); //! only this line communicates with redux
        return data;
    }
};

//? Post-thunk export
export const postTweetThunk = (tweet) => async (dispatch) => {

    const res = await fetch('/api/tweets', {
        method: 'POST',
        body: JSON.stringify(tweet),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (res.ok) {
        const newTweet = await res.json();
        dispatch(postTweet(newTweet));
        return newTweet;
    }
};

// state object
const initialState = {allTweets: {}, errors: []};

// reducer
const tweetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_TWEETS: {
            const newState = {...state, allTweets: {}};
            action.tweets.forEach((tweet) => (newState.allTweets[tweet.id] = tweet));
            console.log(newState)
            return newState;
        }

        case POST_TWEET: {
            const newState = { ...state };

            newState[action.payload.id] = action.payload;
            return newState;
        }

        default:
            return state;
    }
};

export default tweetsReducer;
