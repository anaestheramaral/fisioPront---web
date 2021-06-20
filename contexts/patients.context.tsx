import React, { createContext } from 'react';
import usePersistedState from '../assets/usePersistedState';

interface PatientProps {
  name: string;
  internationMotive: string;
  observations: string;
};

interface PatientsProps {
  patients: PatientProps[],
  handleAddNewPatient: (newPatient: PatientProps) => void;
};


type PatientsProviderProps = { children: React.ReactNode };

export const PacientsContext = createContext<PatientsProps>({} as PatientsProps);

export const PatientsContextProvider = ({ children}: PatientsProviderProps) => {
  const [patients, setPatients] = usePersistedState('@fisioPront:patients', [] as PatientProps[]);

  const handleAddNewPatient = (newPatient: PatientProps) => {
    setPatients([...patients, newPatient])
  };

  return (
    <PacientsContext.Provider value={{patients, handleAddNewPatient}}>
      {children}
    </PacientsContext.Provider>
  )
}
