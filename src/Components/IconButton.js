import React from 'react';

export const IconButton = ({ icon, onclick }) => {
  return (
    <div className='max-w-fit p-2 rounded-full hover:bg-slate-200' onClick={onclick}>
      {icon}


    </div>
  );
};
