import { usePatient } from "../contexts";
export const Form = (props) => {
  const { patient, addPatient, dispatchPatient, updateAppointment } =
    usePatient();
  let count = Math.floor(Math.random() * 10000) + 1;
  return (
    <>
      <div className="rounded-md p-4">
        <p className="mb-2">To {props?.docName}</p>
        <form
          action="post"
          className="flex flex-col gap-4 items-end"
          onSubmit={(e) => {
            e.preventDefault();
            if (props.patId) {
              updateAppointment(props.patId, patient);
            } else {
              addPatient({
                ...patient,
                docName: props?.docName,
                patId: count,
              });
            }
            dispatchPatient({ type: "CLEAR" });
          }}
        >
          <div className="flex flex-col gap-2">
            <input
              className="outline-none border border-gray-200 p-2 rounded-md"
              type="text"
              placeholder="First name..."
              value={patient.name}
              required
              onChange={(e) => {
                dispatchPatient({ type: "NAME", payload: e.target.value });
              }}
            />

            <input
              className="outline-none border border-gray-200 p-2 rounded-md"
              type="tel"
              placeholder="Ph no..."
              required
              value={patient.phno}
              onChange={(e) => {
                dispatchPatient({ type: "PHNO", payload: e.target.value });
              }}
            />
            <input
              className="outline-none border border-gray-200 p-2 rounded-md"
              type="email"
              placeholder="Email..."
              required
              value={patient.email}
              onChange={(e) => {
                dispatchPatient({ type: "EMAIL", payload: e.target.value });
              }}
            />
            <div className="flex gap-4 justify-between items-center ">
              <input
                className="outline-none border border-gray-200 p-2 rounded-md"
                type="date"
                value={patient.date}
                required
                onChange={(e) => {
                  dispatchPatient({ type: "DATE", payload: e.target.value });
                }}
              />
              <div className="flex justify-between items-center border border-gray-200 p-1 rounded-lg">
                <span>Time : </span>
                <span className="ml-2 flex gap-2 items-center">
                  <input
                    type="number"
                    placeholder="00"
                    min="0"
                    max="12"
                    required
                    className="w-16 py-1 px-2 border rounded-md"
                    value={patient?.time?.hr}
                    onChange={(e) =>
                      dispatchPatient({
                        type: "TIME",
                        payload: {
                          ...patient?.time,
                          hr: e.target.value,
                          ampm: "AM",
                        },
                      })
                    }
                  />
                  <span>:</span>
                  <input
                    type="number"
                    placeholder="00"
                    className="w-16 py-1 px-2 border rounded-md"
                    value={patient?.time?.min}
                    min="0"
                    max="60"
                    required
                    onChange={(e) =>
                      dispatchPatient({
                        type: "TIME",
                        payload: {
                          ...patient?.time,
                          min: e.target.value,
                          ampm: "AM",
                        },
                      })
                    }
                  />
                  <select
                    name="am-pm"
                    onChange={(e) =>
                      dispatchPatient({
                        type: "TIME",
                        payload: {
                          ...patient.time,
                          ampm: e.target.value,
                        },
                      })
                    }
                  >
                    <option selected value={"AM"}>
                      AM
                    </option>
                    <option value={"PM"}>PM</option>
                  </select>
                </span>
              </div>
            </div>
          </div>
          <button
            className="w-fit px-4 py-2 border rounded-md bg-blue-600 text-white hover:bg-blue-800"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
