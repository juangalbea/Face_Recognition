import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className='white f3'>
        {`${name} , this is the number of the calls you made to the API:`}
        <div className='white f1 '>
          {entries}
        </div>
      </div>
    </div>
  );
}

export default Rank;