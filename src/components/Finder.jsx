import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../svg/Search';

export default function Finder(props) {
    const navigate = useNavigate();
    const paises = props.data;
    const searchTermRef = useRef('');
    const [error, setError] = useState('')

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const searchTerm = searchTermRef.current.value.toLowerCase(); // Convertir a minúsculas
        const paisIgual = paises.find((pais) => pais.name.toLowerCase() === searchTerm || pais.nativeName.toLowerCase() === searchTerm);
        
        if (paisIgual) {
            console.log("País encontrado:", paisIgual);
            setError('')
            navigate(`/${searchTerm}`, {state: paisIgual})
            // Aquí puedes redirigir o hacer lo que necesites con el país encontrado
        } else {
            setError("El país que estas introduciendo no existe")
        }
    };

    return (
        <>
            <form className='flex items-center' onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Introduce un país'
                    className='p-3 w-full md:w-96 border rounded-l-md focus:outline-none dark:bg-slate-500 dark:border-slate-400 dark:text-slate-200'
                    ref={searchTermRef}
                />
                <button type='submit' className='border p-3 bg-white dark:bg-slate-500 border-l-0 rounded-r-md dark:border-slate-400'>
                    <Search/>
                </button>
            </form>
            {error && <p className='p-2 bg-red-600 rounded-md text-white font-medium'>{error}</p>}

        </>
    );
}
