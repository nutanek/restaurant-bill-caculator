import React from 'react'

const InputItem = (props) => {
    let {
        input,
        placeholder,
        type,
        meta: { touched, error, warning },
        readOnly,
        isGroup,
        addon
    } = props

    return (
            <div>
                { 
                    isGroup ? (
                        <div className="input-group"> 
                            <input {...input} 
                                placeholder={placeholder} 
                                readOnly={readOnly}
                                type={type} 
                                className="form-control" />
                            <span className="input-group-addon">
                                {addon}
                            </span> 
                        </div>
                    ) : (
                        <input {...input} 
                            placeholder={placeholder} 
                            readOnly={readOnly}                            
                            type={type} 
                            className="form-control" />
                    )
                }
                
                {
                    touched &&
                        ((error &&  <span className="text-danger">*{error}</span>) ||
                        (warning && <span className="text-warning">{warning}</span>))
                }
            </div>
    )
}

export default InputItem