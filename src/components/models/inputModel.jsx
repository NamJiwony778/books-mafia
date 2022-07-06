import '../../styles/input.scss';

const InputModel = ({label, type, id, name}) => (
   <div className="input-container">
        <label>{label}</label>
        <input type={type} id={id} name={name}/>
    </div>

);

export default InputModel;