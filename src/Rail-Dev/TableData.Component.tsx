const TableData = (props:any)=> {

    return <>
     <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Heading</th>
          <th>TrainId</th>
          <th>Speed</th>
          <th>LocoId</th>
          <th>Status</th>
          <th>LastReportedPerformance</th>
          <th>TrainStoppedStarted</th>
          <th>Latitude</th>
          <th>Longitude</th>
          <th>LastReportedStationSequence</th>
        </tr>
      </thead>

      <tbody>
        {props.systemData.map((item: any, i: number) => {
          return (
            <tr>
              <td>{i+1}</td>
              <td>{item.heading}</td>
              <td>{item.trainId}</td>
              <td>{item.speed}</td>
              <td>{item.locoId}</td>
              <td>{item.status}</td>
              <td>{item.lastReportedPerformance}</td>
              <td>{item.trainStoppedStarted}</td>
              <td>{item.latitude}</td>
              <td>{item.longitude}</td>
              <td>{item.lastReportedStationSequence}</td>
              
            </tr>
          );
        })}
      </tbody>
    </table>
    </>
}
export default TableData;