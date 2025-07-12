import React from 'react';
import { timelineList } from '../_lists/lists';
import { FaLongArrowAltRight } from 'react-icons/fa';

const TimelineDot = () => {
  return (
    <>
      {timelineList.map((list) => (
        <React.Fragment key={list.id}>
          {list.id <= timelineList.length - 1 ? (
            <>
              <div className="border p-6 bg-background rounded-full  text-foreground flex items-center justify-center text-sm text-center">
                {list.title}
              </div>
              <FaLongArrowAltRight className="text-6xl min-w-[50]" />
            </>
          ) : (
            <div className="border p-6 bg-background rounded-full  text-foreground flex items-center justify-center text-sm text-center">
              {list.title}
            </div>
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default TimelineDot;
