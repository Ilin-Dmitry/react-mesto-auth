import PopupWithForm from "./PopupWithForm";
import union from "../images/union.svg"

function InfoTooltip ({isOpen, onClose}) {
  return(
    <PopupWithForm containerClassName="popup__container_type_info" headingClassName="popup__heading_type_info" submitButtonHidden="popup__submit-button_hidden" isOpen={isOpen} onClose={onClose} >
      <>
        <img className="popup__pic" src={union}/>
        <h2 className="popup__heading popup__heading_type_info">Вы успешно зарегистрировались!</h2>
      </>
    </PopupWithForm>
  )
}

export default InfoTooltip;