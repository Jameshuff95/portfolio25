import React from 'react';
import { timelineList } from '../_lists/lists';
import { FaLongArrowAltRight } from 'react-icons/fa';

const TimelineDot = () => {
  return (
    <div className="p-2 flex flex-grow overflow-x-auto items-center gap-8 h-[200]">
      {timelineList.map((timeline) => (
        <React.Fragment key={timeline.id}>
          {timeline.id <= timelineList.length ? (
            <>
              <div className="border p-4 rounded-full flex items-center justify-center text-sm text-center min-w-[25%] h-[75%]">
                {timeline.title}
              </div>

              {timeline.id < timelineList.length ? (
                <FaLongArrowAltRight className="text-6xl min-w-[50]" />
              ) : null}
            </>
          ) : null}
        </React.Fragment>
      ))}
    </div>
  );
};

export default TimelineDot;
