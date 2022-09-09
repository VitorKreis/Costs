import './Input.css'

function Input({type, text, placeholder, name, handleOnChange, value}){
    return(
        <div className='form_control'>
            <label>{text}</label>
            <input type={type} placeholder={placeholder} name={name} id={name} onChange={handleOnChange} value={value}/>
        </div>
    )
}


export default Input