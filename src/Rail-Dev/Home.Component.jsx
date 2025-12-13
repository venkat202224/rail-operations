import { useState } from "react";
import TableData from "./TableData.Component";
import Modal from "./Modal.component";

const Home = () => {
  const systemData = {
    response: {
      properties: [
        {
          heading: 0,
          trainId: "Z47608",
          speed: 0.0,
          locoId: "",
          status: "AOT",
          lastReportedPerformance: "",
          trainStoppedStarted: "",
          trainStoppedHeaderTime: "",
          latitude: 38.22695073,
          longitude: -85.76693048,
          lastReportedStationSequence: " ",
        },
        {
          heading: 0,
          trainId: "D41008",
          speed: 0.0,
          locoId: "",
          status: "AOT",
          lastReportedPerformance: "",
          trainStoppedStarted: "",
          trainStoppedHeaderTime: "",
          latitude: 38.16638413,
          longitude: -85.75065427,
          lastReportedStationSequence: "001",
        },
        {
          heading: 0,
          trainId: "U40503",
          speed: 0.0,
          locoId: "",
          status: "AOT",
          lastReportedPerformance: "",
          trainStoppedStarted: "",
          trainStoppedHeaderTime: "",
          latitude: 36.95070983,
          longitude: -86.48477552,
          lastReportedStationSequence: "001",
        },
        {
          heading: 0,
          trainId: "L40508",
          speed: 0.0,
          locoId: "",
          status: "AOT",
          lastReportedPerformance: "",
          trainStoppedStarted: "",
          trainStoppedHeaderTime: "",
          latitude: 36.95070983,
          longitude: -86.48477552,
          lastReportedStationSequence: "001",
        },
        {
          heading: 0,
          trainId: "M52108",
          speed: 0.0,
          locoId: "",
          status: "AOT",
          lastReportedPerformance: "",
          trainStoppedStarted: "",
          trainStoppedHeaderTime: "",
          latitude: 36.07815706,
          longitude: -86.76445352,
          lastReportedStationSequence: "001",
        },
        {
          heading: 0,
          trainId: "M58308",
          speed: 0.0,
          locoId: "",
          status: "AOT",
          lastReportedPerformance: "",
          trainStoppedStarted: "",
          trainStoppedHeaderTime: "",
          latitude: 36.07815706,
          longitude: -86.76445352,
          lastReportedStationSequence: "001",
        },
        {
          heading: 0,
          trainId: "M50008",
          speed: 0.0,
          locoId: "",
          status: "AOT",
          lastReportedPerformance: "",
          trainStoppedStarted: "",
          trainStoppedHeaderTime: "",
          latitude: 36.07815706,
          longitude: -86.76445352,
          lastReportedStationSequence: "001",
        },
        {
          heading: 0,
          trainId: "M53308",
          speed: 0.0,
          locoId: "",
          status: "AOT",
          lastReportedPerformance: "",
          trainStoppedStarted: "",
          trainStoppedHeaderTime: "",
          latitude: 36.07815706,
          longitude: -86.76445352,
          lastReportedStationSequence: "001",
        },
        {
          heading: 0,
          trainId: "M20409",
          speed: 0.0,
          locoId: "",
          status: "AOT",
          lastReportedPerformance: "",
          trainStoppedStarted: "",
          trainStoppedHeaderTime: "",
          latitude: 36.07815706,
          longitude: -86.76445352,
          lastReportedStationSequence: "001",
        },
        {
          heading: 0,
          trainId: "M52309",
          speed: 0.0,
          locoId: "",
          status: "AOT",
          lastReportedPerformance: "",
          trainStoppedStarted: "",
          trainStoppedHeaderTime: "",
          latitude: 36.07815706,
          longitude: -86.76445352,
          lastReportedStationSequence: "001",
        },
        {
          heading: 0,
          trainId: "M51209",
          speed: 0.0,
          locoId: "",
          status: "AOT",
          lastReportedPerformance: "",
          trainStoppedStarted: "",
          trainStoppedHeaderTime: "",
          latitude: 36.07815706,
          longitude: -86.76445352,
          lastReportedStationSequence: "001",
        },
        {
          heading: 0,
          trainId: "L69508",
          speed: 0.0,
          locoId: "",
          status: "AOT",
          lastReportedPerformance: "",
          trainStoppedStarted: "",
          trainStoppedHeaderTime: "",
          latitude: 35.74935434,
          longitude: -86.96090533,
          lastReportedStationSequence: "001",
        },
        {
          heading: 0,
          trainId: "U84808",
          speed: 0.0,
          locoId: "",
          status: "AOT",
          lastReportedPerformance: "",
          trainStoppedStarted: "",
          trainStoppedHeaderTime: "",
          latitude: 34.57327072,
          longitude: -86.98276431,
          lastReportedStationSequence: "001",
        },
        {
          heading: 0,
          trainId: "H29208",
          speed: 0.0,
          locoId: "",
          status: "AOT",
          lastReportedPerformance: "",
          trainStoppedStarted: "",
          trainStoppedHeaderTime: "",
          latitude: 34.18437818,
          longitude: -86.84779081,
          lastReportedStationSequence: "001",
        },
        {
          heading: 0,
          trainId: "H29008",
          speed: 0.0,
          locoId: "",
          status: "AOT",
          lastReportedPerformance: "",
          trainStoppedStarted: "",
          trainStoppedHeaderTime: "",
          latitude: 34.18437818,
          longitude: -86.84779081,
          lastReportedStationSequence: "001",
        },
        {
          heading: 0,
          trainId: "L80408",
          speed: 0.0,
          locoId: "",
          status: "AOT",
          lastReportedPerformance: "",
          trainStoppedStarted: "",
          trainStoppedHeaderTime: "",
          latitude: 33.5952987,
          longitude: -86.78977765,
          lastReportedStationSequence: "001",
        },
        {
          heading: 0,
          trainId: "L68208",
          speed: 0.0,
          locoId: "",
          status: "AOT",
          lastReportedPerformance: "",
          trainStoppedStarted: "",
          trainStoppedHeaderTime: "",
          latitude: 33.5952987,
          longitude: -86.78977765,
          lastReportedStationSequence: "001",
        },
        {
          heading: 0,
          trainId: "I18707",
          speed: 0.0,
          locoId: "",
          status: "AOT",
          lastReportedPerformance: "",
          trainStoppedStarted: "",
          trainStoppedHeaderTime: "",
          latitude: 33.56275745,
          longitude: -86.78908335,
          lastReportedStationSequence: "001",
        },
        {
          heading: 0,
          trainId: "I18107",
          speed: 0.0,
          locoId: "",
          status: "AOT",
          lastReportedPerformance: "",
          trainStoppedStarted: "",
          trainStoppedHeaderTime: "",
          latitude: 33.56275745,
          longitude: -86.78908335,
          lastReportedStationSequence: "001",
        },
        {
          heading: 0,
          trainId: "I18307",
          speed: 0.0,
          locoId: "",
          status: "AOT",
          lastReportedPerformance: "",
          trainStoppedStarted: "",
          trainStoppedHeaderTime: "",
          latitude: 33.56275745,
          longitude: -86.78908335,
          lastReportedStationSequence: "001",
        },
        {
          heading: 0,
          trainId: "I18708",
          speed: 0.0,
          locoId: "",
          status: "AOT",
          lastReportedPerformance: "",
          trainStoppedStarted: "",
          trainStoppedHeaderTime: "",
          latitude: 33.56275745,
          longitude: -86.78908335,
          lastReportedStationSequence: "001",
        },
        {
          heading: 0,
          trainId: "I18108",
          speed: 0.0,
          locoId: "",
          status: "AOT",
          lastReportedPerformance: "",
          trainStoppedStarted: "",
          trainStoppedHeaderTime: "",
          latitude: 33.56275745,
          longitude: -86.78908335,
          lastReportedStationSequence: "001",
        },
        {
          heading: 0,
          trainId: "I18308",
          speed: 0.0,
          locoId: "",
          status: "AOT",
          lastReportedPerformance: "",
          trainStoppedStarted: "",
          trainStoppedHeaderTime: "",
          latitude: 33.56275745,
          longitude: -86.78908335,
          lastReportedStationSequence: "001",
        },
        {
          heading: 0,
          trainId: "L67908",
          speed: 0.0,
          locoId: "",
          status: "AOT",
          lastReportedPerformance: "",
          trainStoppedStarted: "",
          trainStoppedHeaderTime: "",
          latitude: 33.11407296,
          longitude: -86.75122358,
          lastReportedStationSequence: "001",
        },
        {
          heading: 0,
          trainId: "L68008",
          speed: 0.0,
          locoId: "",
          status: "AOT",
          lastReportedPerformance: "",
          trainStoppedStarted: "",
          trainStoppedHeaderTime: "",
          latitude: 33.11407296,
          longitude: -86.75122358,
          lastReportedStationSequence: "001",
        },
        {
          heading: 0,
          trainId: "Z79708",
          speed: 0.0,
          locoId: "",
          status: "AOT",
          lastReportedPerformance: "",
          trainStoppedStarted: "",
          trainStoppedHeaderTime: "",
          latitude: 32.4713068,
          longitude: -86.34155196,
          lastReportedStationSequence: " ",
        },
        {
          heading: 0,
          trainId: "W26805",
          speed: 0.0,
          locoId: "",
          status: "AOT",
          lastReportedPerformance: "",
          trainStoppedStarted: "",
          trainStoppedHeaderTime: "",
          latitude: 32.39911403,
          longitude: -86.31788762,
          lastReportedStationSequence: "001",
        },
        {
          heading: 0,
          trainId: "M82707",
          speed: 0.0,
          locoId: "",
          status: "AOT",
          lastReportedPerformance: "",
          trainStoppedStarted: "",
          trainStoppedHeaderTime: "",
          latitude: 32.39911403,
          longitude: -86.31788762,
          lastReportedStationSequence: "001",
        },
      ],
    },
  };

  const [displayModal, setDisplayModal] = useState(false);
  const [currentTrain, setCurrentTrain] = useState("");
  const [tableDatas, setTableDatas] = useState(systemData.response.properties);
  const [sortTrain, setSortTrain] = useState(true);

  // sorting code

  const sortTrainId = () => {
    const sorted = [...tableDatas].sort((a, b) => {
      return sortTrain
        ? a.trainId.localeCompare(b.trainId)
        : b.trainId.localeCompare(a.trainId);
    });
    setTableDatas(sorted);
    setSortTrain(!sortTrain);
    console.log(sorted);
  };

  // Delete code

  const deleteRow = (item) => {
    const updated = tableDatas.filter((row) => row.item !== item);
    setTableDatas(updated);
    console.log(updated);
  };
  console.log(deleteRow)

  // pop box code

  const showPopBox = (trainData) => {
    setDisplayModal(!displayModal);
    setCurrentTrain(trainData);
  };

  return (
    <>
      <h1>Home Component</h1>

      {displayModal && <Modal showModal={showPopBox} sendData={currentTrain} />}

      <TableData
        systemData={tableDatas}
        handleCurrentTrainIdClick={showPopBox}
        sortTrainId={sortTrainId}
        deleteRow={deleteRow}
      />
    </>
  );
};
export default Home;
