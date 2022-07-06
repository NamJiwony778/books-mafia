
const ButtonModel = ({label, type, id, name, className}) => (
    <button type={type} id={id} name={name} className={className}>
         {label}
    </button>
);
 
 export default ButtonModel;