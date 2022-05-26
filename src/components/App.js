import React, {useState} from 'react';
import Counter from './Counter';

function App() {
  const [value, setValue] = useState('Текст в инпуте');


  return (
    <div className="App">
      <div className='post'>

        <div className='post__content'>
          <strong> Пост</strong>
          <div>
            Описание поста
          </div>
        </div>

        <div className='post__btns'>
          <button> Удалить </button>
        </div>
      </div>
    </div>
  );
}

export default App;
