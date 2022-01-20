
import '../styles/gif_modal.scss';

interface IModalProps {
  gif_id: string;
  show: boolean;
  setShowModal: (show: boolean) => void;
}

function GifModal (props : IModalProps){
  const { gif_id, show, setShowModal } = props;

  return (<>
    {
      show?(
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header" onClick={() => setShowModal(false)} >  
            <span className="close">&times;</span>
          </div>
          <div className="modal-body">
            <img src={`https://media.giphy.com/media/${gif_id}/giphy.gif`} alt="gif" />
          </div> 
        </div>
      </div>):
      (<></>)
    }
  </>
  );

}
export { GifModal }