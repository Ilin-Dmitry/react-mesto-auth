import PopupWithForm from "./PopupWithForm";
import regsuccess from "../images/regsuccess.svg";
import regerror from "../images/regerror.svg";

function InfoTooltip ({isOpen, onClose, isSuccessful}) {
  return(
    <PopupWithForm containerClassName="popup__container_type_info" headingClassName="popup__heading_type_info" submitButtonHidden="popup__submit-button_hidden" isOpen={isOpen} onClose={onClose} >
      <>
        <img className="popup__pic" src={isSuccessful ? regsuccess : regerror}/>
        <h2 className="popup__heading popup__heading_type_info">{isSuccessful ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'} </h2>
      </>
    </PopupWithForm>
  )
}

export default InfoTooltip;

