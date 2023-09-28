import "./LoadingSpinner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function LoadingSpinner() {
  return (
    <div>
      <FontAwesomeIcon icon={faSpinner} spin />
    </div>
  );
}
