import React, { useState, useEffect } from 'react';
import { usePaises } from '../hooks/HookPaises';

export default function Filter({ setSelected, selectedPais }) {
  const { data } = usePaises();

  const continentes = [...new Set(data.map(pais => pais.region))];

  const handleSelectChange = (event) => {
    const region = event.target.value;
    setSelected(region);
    console.log(document.querySelector("select").value)
  };

  return (
    <section className=''>
      <select
        value={selectedPais}
        onChange={handleSelectChange}
        className='p-3 rounded-md bg-white w-full md:w-52 cursor-pointer focus:outline-none'>
        <option value="">Seleccione una región</option>
 
        {continentes.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </section>
  );
}
