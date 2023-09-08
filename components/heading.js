import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
const Heading = () => {
  return (
    <div className="heading">
      <h1>
        <FontAwesomeIcon
          icon={faCalendarDays}
          bounce
          className="calenderIcon"
        />
        To-Do List
        <FontAwesomeIcon
          icon={faCalendarDays}
          bounce
          className="calenderIcon"
        />
      </h1>
      <p>Plan your everything in advance. Don't miss a single event. </p>
    </div>
  );
};
export default Heading;
