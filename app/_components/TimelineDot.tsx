import React from 'react';
import { timelineList } from '../_lists/lists';
import { FaLongArrowAltRight } from 'react-icons/fa';

const TimelineDot = () => {
  return (
    <div className="p-2 flex flex-grow overflow-x-auto items-center gap-8 h-[200]">
      {timelineList.map((timeline) => (
        <React.Fragment key={timeline.id}>
          {timeline.id <= timelineList.length - 1 ? (
            <>
              <div className="border p-6 rounded-full flex items-center justify-center text-sm text-center w-[50%]">
                {timeline.title}
              </div>
              <FaLongArrowAltRight className="text-6xl min-w-[50]" />
            </>
          ) : (
            <div className="border p-6 bg-foreground rounded-full  text-background flex items-center justify-center text-sm text-center min-w-[100]">
              {timeline.title}
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default TimelineDot;
