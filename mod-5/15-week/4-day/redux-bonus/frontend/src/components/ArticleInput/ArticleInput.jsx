import { useState } from 'react';
// import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addArticleThunk } from '../../store/articleReducer';
import './ArticleInput.css';

const ArticleInput = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [errors, setErrors] = useState([]);
  let navigate = useNavigate()

  const dispatch = useDispatch();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newArticle = {
      // id: nanoid(),
      title,
      body,
      imageUrl
    };

    if(!title){
      return setErrors(["you need a title"])
    }

    let res =  await dispatch(addArticleThunk(newArticle));
    console.log("RES", res)
    // if(res){
    if(res?.errors.length > 0){
  
      return setErrors(res.errors)
    }

    navigate('/')

    // if(data.errors) return setErrors(data.errors)
      // DATA:  {id: 11, title: 'test', body: 'test', imageUrl: 'test.png'}
    // navigate(`/articles/${data.id}`)
    reset();
  };

  const reset = () => {
    setTitle('');
    setImageUrl('');
    setBody('');
  };



  return (
    <div className='inputBox'>
      <h1>Create Article</h1>
      {errors?.length > 0 && 
      errors.map((err, idx) => (
        <p style={{color: 'red'}} key={idx}>{err}</p>
      ))
      }
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder='Title'
          name='title'
        />
        <input
          type='text'
          onChange={(e) => setImageUrl(e.target.value)}
          value={imageUrl}
          placeholder='Image URL'
          name='imageUrl'
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          name='body'
          placeholder='Add your entry'
          rows='10'
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default ArticleInput;
