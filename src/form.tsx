import React, { forwardRef, useImperativeHandle } from 'react'


interface FormProps {
    initialData?: string
}

export interface FormRef {
    submit(): void
}
const Form: React.RefForwardingComponent<FormRef, FormProps> = (props, ref) => {

    function submit() {
        alert('submit')
    }

    useImperativeHandle(ref, () => ({
        submit
    }))
    return (
        <form action="">
            <input type="text"></input>
            <input type="text"></input>
            <input type="text"></input>
            <input type="text"></input>
            <input type="text"></input>
            <input type="text"></input>
        </form>
    )
}

export default forwardRef(Form)