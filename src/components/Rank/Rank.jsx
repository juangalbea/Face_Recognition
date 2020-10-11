import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className='white f3'>
        {`${name} , the number of images you stored in the database is:`}
        <div className='white f1 '>
          {entries}
        </div>
      </div>
    </div>
  );
}

export default Rank;