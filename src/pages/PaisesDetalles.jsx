import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import Header from '../components/Header';
export default function PaisesDetalles() {
    const { state } = useLocation();
    const name = state.name
    const lenguages = state.languages
    const border = state.borders

    const languageNames = lenguages.map(language => language.name);
    // const borderCountries = border.map(borde => borde.borders)
    console.log("state ",state.borders)


    const bandera = state.flags.png
    const navigate = useNavigate()
    // console.log(state);
  return (
    <div className='overflow-auto h-screen bg-slate-100 dark:bg-slate-700 dark:text-white'>
        <Header/>
        <main className='p-4 '>
            <section className=' max-w-[1440px] m-auto my-11'>
                <button className='p-3 w-32 border bg-white dark:bg-slate-400 dark:border-slate-500 hover:shadow-md rounded-md' onClick={() => {navigate(-1)}}>Back</button>
            </section>
            <section className='max-w-[1440px] gap-16 m-auto  flex flex-col md:flex-row md:justify-between'>
                <img src={bandera} alt={name} className='w-full md:w-[600px]'/>
                <article className="flex flex-col gap-4 md:w-2/5">
                    <article>
                        <h1 className="font-semibold text-2xl">{name}</h1>
                        <p>Native name: {state.nativeName}</p>
                        <p>Population: {state.population}</p>
                        <p>Region: {state.region}</p>
                        <p>Sub region: {state.subregion}</p>
                        <p>Capital: {state.capital}</p>
                    </article>
                    <article>
                        <p>Top Level Domain: {state.topLevelDomain}</p>
                        <p>Curencies: {state.currencies ? state.currencies[0].name : ("no currencies")}</p>
                        <p>Lenguages: {languageNames.join(', ')}</p>
                    </article>
                    <article>
                        <h2>Border Countries</h2>
                        <div className={border ? 'grid grid-cols-3 gap-2' : 'w-full'}>
                        {border ? border.map((borders, index) => (
                                <p key={index} className='bg-white dark:bg-slate-400 dark:border-slate-500  p-2 border shadow text-center'>{borders}</p>
                            )) : <p className='bg-white dark:bg-slate-400 dark:border-slate-500 w-full p-2 border shadow text-center'>No tiene paises limitrofes</p>}
                        </div>
                        
                    </article>
                    
                </article>
                
            </section>
        </main>
    </div>
  )
}
