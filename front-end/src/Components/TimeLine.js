import React, { Fragment } from "react";

const Timeline = ({ events }) => {
    return (
      <div className="flex items-center gap-x-2 w-full my-4 overflow-x-auto">
        {events.map((event, key) => (
          <Fragment key={key}>
            <div className="flex flex-col items-center gap-y-2">
              {event.direction === "up" ? (
                <EventCard heading={event.heading} subHeading={event.subHeading} />
              ) : (
                <div> </div>
              )}
              <Circle />
              {event.direction === "down" ? (
                <EventCard heading={event.heading} subHeading={event.subHeading} />
              ) : (
                <div></div>
              )}
            </div>
            {key < events.length - 1 && <Pillar />}
          </Fragment>
        ))}
      </div>
    );
  };
  

const Circle = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-full w-4 h-4"></div>
  );
};

const Pillar = () => {
    return (
      <div className="bg-gradient-to-b from-blue-500 to-teal-500 rounded-l-full rounded-r-full w-full h-2"></div>
    );
  };
  

const EventCard = ({ heading, subHeading }) => {
  return (
    <div className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl flex flex-col gap-y-2 border shadow-md rounded-xl p-4">
      <div className="text-blue-800 font-bold text-lg border-b">{heading}</div>
      <div className="text-sm text-gray-700">{subHeading}</div>
    </div>
  );
};

export default Timeline;