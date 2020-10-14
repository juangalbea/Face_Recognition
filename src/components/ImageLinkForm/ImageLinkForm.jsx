import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3'>
        {'Copy image url and find who is younger and older, from magenta to dark blue'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
          <button
            className='w-30 grow f4 link ph3 pv2 dib white bg-dark-red'
            onClick={onButtonSubmit}
          >Danger</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;