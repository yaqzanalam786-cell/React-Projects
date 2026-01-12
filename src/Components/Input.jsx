import React, {use, useId} from 'react'

const Input = React.forwardRef( function Input({
    label,
    type = 'text',
    className = '',
    ...props
},ref)
{    const id = useId()
    return (
        
        <div >
            {label && <label className='inline-block text-white mb-1 pl-1' >{label}</label>}
            <input
            type={type}
            id={id}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 ${className} `}
            ref = {ref} 
            {...props}
            />
        </div>
    )
} )

export default Input