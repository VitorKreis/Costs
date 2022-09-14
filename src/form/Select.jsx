import './Select.css'

function Select({text, name, options, handleOnChange, value}){
    return(
        <div className='form_control'>
            <label>{text}</label>
            <select name={name} onChange={handleOnChange} value={value || ''}>
                <option>Select your categorie</option>
                {options.map((option)=>(
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}


export default Select