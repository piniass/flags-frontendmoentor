import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Finder from '../components/Finder';
import Filter from '../components/Filter';
import { usePaises } from '../hooks/HookPaises';
import PaisesContainer from '../components/PaisesContainer';

export default function Landing() {
  const { data, loading } = usePaises();
  const [selectedPais, setSelected] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    if (selectedPais) {
      setFilteredData(data.filter(pais => pais.region === selectedPais));
    } else {
      setFilteredData(data);
    }
  }, [selectedPais, data]);

  const FilterContainer = ({ children }) => {
    return (
      <div className='max-w-[1440px] m-auto p-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between'>
        {children}
      </div>
    );
  };

  return (
    <main className='h-screen overflow-auto bg-slate-100 dark:bg-slate-700'>
      <Header />
      <main className='w-full '>
        <FilterContainer>
          <Finder data={data} />
          <Filter setSelected={setSelected} selectedPais={selectedPais}/>
        </FilterContainer>
        {loading ? (
          <main className='h-screen dark:text-white'>
              <p className='text-center'>Cargando datos...</p>
          </main>
        ) : (
          <PaisesContainer data={filteredData} />
        )}
      </main>
    </main>
  );
}
