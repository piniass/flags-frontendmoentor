import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PaisesContainer(props) {
    const pais = props.data;
    const navigate = useNavigate()
    // console.log("props",props.data);

    const handlePais = (pais) => {
        console.log(pais)
        const paisObjeto = pais
        navigate(`/${pais.name}`,{state: pais})
    }

    const cardComponent = (pais) => {
        return (<div key={pais.name} onClick={() => handlePais(pais)} className='w-full shadow-md border bg-white dark:bg-slate-500 dark:text-white rounded-md dark:border-slate-500'>
            <div className='w-full rounded-t-md'>
                <img src={pais.flags.png} alt="" className='size-full rounded-t-md'/>
            </div>
            <div className='p-2 flex flex-col gap-2'>
                <h2 className='text-xl font-semibold'>{pais.name}</h2>
                <p>Population: {pais.population}</p>
                <p>Region: {pais.region}</p>
                <p>Capitula: {pais.capital}</p>
            </div>
            </div>); 
    }

    const renderCards = () => {
        return pais.map(paises => cardComponent(paises));
    }

    return (
        <div className='max-w-[1440px] dark:bg-slate-700 m-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10'>
            { renderCards() }
        </div>
    );
}
