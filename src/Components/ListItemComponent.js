import React from 'react';

export const ListItemComponent = ({ component, title, onclick,isSelected }) => {
  return (
    <div className={`flex flex-row items-center my-1 px-2 gap-2 rounded-md ${isSelected && 'border border-slate-400 bg-slate-200 '} hover:bg-slate-200 w-full cursor-pointer`} onClick={onclick}>
      {component}
      <div className='text-sm font-normal text-ellipsis break-keep w-full whitespace-nowrap overflow-hidden sm:text-base'>
        {title}
      </div>

    </div>
  );
};
