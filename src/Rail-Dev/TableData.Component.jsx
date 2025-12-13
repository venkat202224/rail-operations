import Home from "./Home.Component";
import Submission from "./Submission.Component";
const TableData = (props) => {
  return (
    <>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Heading</th>
              <th onClick={props.sortTrainId}>TrainId ▲/▼</th>
              <th>Speed</th>
              <th>LocoId</th>
              <th>Status</th>
              <th>LastReportedPerformance</th>
              <th>TrainStoppedStarted</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>LastReportedStationSequence</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {props.systemData.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.heading}</td>
                  <td onClick={() => props.handleCurrentTrainIdClick(item)}>
                    {item.trainId}
                  </td>
                  <td>{item.speed}</td>
                  <td>{item.locoId}</td>
                  <td>{item.status}</td>
                  <td>{item.lastReportedPerformance}</td>
                  <td>{item.trainStoppedStarted}</td>
                  <td>{item.latitude}</td>
                  <td>{item.longitude}</td>
                  <td>{item.lastReportedStationSequence}</td>
                  <td>
                    {" "}
                    <button
                      className="deleteBtn"
                     
                      onClick={() => props.deleteRow(item)}>Delete </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default TableData;
