import { useEffect } from "react";
import { usePatient } from "../contexts";

export const PatientCard = (props) => {
  const { cancelAppointment } = usePatient();
  useEffect(() => {}, [props]);

  return (
    <div className="w-56 border rounded-lg py-2 flex flex-col gap-2">
      <div className="px-2 flex gap-2">
        {props?.img ? (
          <img
            src={props?.img}
            alt=""
            className="h-10 w-10 rounded-full border mr-2"
          />
        ) : (
          <span className="h-10 w-10 rounded-full border mr-2 flex items-center justify-center">
            {props.name[0].toUpperCase()} {props.name[1].toUpperCase()}
          </span>
        )}

        <p>{props?.name}</p>
      </div>
      <span className="px-2 text-sm font-semibold text-gray-700">
        {props?.date}
      </span>
      {props.status > 0 ? (
        <button
          onClick={() => cancelAppointment(props.patId)}
          className="mx-2 px-3 py-1.5 rounded-md bg-yellow-600 text-white text-sm"
        >
          Done
        </button>
      ) : (
        <div className="flex justify-between px-2">
          <button
            onClick={() => props.statusHandler(props.patId, -1)}
            className="px-3 py-1.5 rounded-md border text-gray-700 text-sm"
          >
            Decline
          </button>
          <button
            onClick={() => props.statusHandler(props.patId, 1)}
            className="px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm"
          >
            Accept
          </button>
        </div>
      )}
    </div>
  );
};
