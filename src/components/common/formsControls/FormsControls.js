import React from "react"

export const TextInput = ({input, meta, ...props}) => {
    return (
        <div>
            <input {...props.input} {...props} />
        </div>
    );
}