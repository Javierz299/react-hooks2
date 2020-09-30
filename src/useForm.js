import {useState} from 'react'

export const useForm = (initialValues) => {
    console.log("initial values",initialValues)
    const [values, setValues] = useState(initialValues);
    console.log('values',values)
    console.log('setvalues',setValues)
    return [
        values,
        (e) => {
            setValues({...values,
                [e.target.name]: e.target.value
            });
    },
  ];
};