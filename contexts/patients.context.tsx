import React, { createContext, useState } from 'react';

interface PatientProps {
  name: string;
  internationMotive: string;
  observations: string;
};
interface PatientsProps {
  patients: PatientProps[],
  handleAddNewPatient: (newPatient: PatientProps) => any;
};

export const PatientsContext = createContext<PatientsProps>({} as PatientsProps);

export const PatientsProvider = (props: any) => {
  const [patients, setPatients] = useState<PatientProps[]>([]);


  const handleAddNewPatient = (newPatient: PatientProps) => {
    setPatients([...patients, newPatient])
  };

  const children = props.children;

  return (
    <PatientsContext.Provider value={{patients, handleAddNewPatient}}>
      {children}
    </PatientsContext.Provider>
  )
}
