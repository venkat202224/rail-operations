import { useState } from "react";
import Modal from './Modal.component'
const Submission = () => {
  const [createModal, setCreateModal] = useState(false);

  const showModal = () => {
    setCreateModal(!createModal);
  };

  return (
    <>
      <h1>Submission Component</h1>
      <button className="btn-toggle" onClick={showModal}>Show</button>

      {createModal && (
       <Modal showModal={showModal} />
      )}
    </>
  );
};
export default Submission;
