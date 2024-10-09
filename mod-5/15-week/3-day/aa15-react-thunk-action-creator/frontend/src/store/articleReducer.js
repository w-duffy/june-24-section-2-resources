
//! --------------------------------------------------------------------
//*                            Action Types
//! --------------------------------------------------------------------
const LOAD_ARTICLES = "article/loadArticles";
const ADD_ARTICLE = "article/addArticle";

//! --------------------------------------------------------------------
//*                           Action Creators
//! --------------------------------------------------------------------

export const loadArticles = (articles) => {
  // console.log("Step 6v2: In action creator", articles)
  return {
      type: LOAD_ARTICLES,
      articles,
  };
};

export const addArticle = (payload) => {
  return {
    type: ADD_ARTICLE,
    payload,
  };
};



//! --------------------------------------------------------------------
//?                              Thunks
//! --------------------------------------------------------------------

export const fetchArticles = () => async dispatch => {
  console.log("Step 3 in Thunk")
  const response = await fetch('/api/articles');
  const articles = await response.json();

  console.log("Step 6 ~~BACK IN THUNK~~", articles)
  dispatch(loadArticles(articles));
  // {type: , payload}
  // dispatch({type: LOAD_ARTICLES,  articles});
};




export const addArticleThunk = (articleFormData) => async (dispatch) => {
  const res = await fetch("/api/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(articleFormData),
  });

  if (res.ok) {
    const newArticle = await res.json();
    dispatch(addArticle([newArticle]));
    return null;
  } else {
    const errors = await res.json();
    return errors;
  }
};

const initialState = { entries: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      console.log("STEP 7 in reducer")
      // console.log("State", state)
      // console.log("Action", action)
      return { ...state, entries: [...action.articles] };
    case ADD_ARTICLE:
      return { ...state, entries: [...state.entries, action.payload] }; 
    default:
      return state;
  }
};
export default articleReducer;