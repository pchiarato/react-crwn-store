import './form-input.component.scss';
const FormInputComponent = ({
  label,
  id,
  type,
  name,
  value,
  handleChange,
  required,
}) => {
  return (
    <div className="form-group">
      <input
        className="form-input"
        onChange={handleChange}
        value={value}
        id={id}
        type={type}
        required={required}
        name={name}
      />
      {label && (
        <label className={`${value.length > 0 ? 'shrink' : ''} form-input-label`} 
        htmlFor={id}>{label}
      </label>
      )}
    </div>
  );
};

export default FormInputComponent;
