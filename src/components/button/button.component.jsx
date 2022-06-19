import './button.component.scss';

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted'
}
const ButtonComponent = ({children, buttonType, ...otherProps}) => {
  return (
    <button class={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}{...otherProps}>{children}</button>
  );
}

export default ButtonComponent;