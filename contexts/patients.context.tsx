import React, { createContext, useEffect, useState } from 'react';

interface PatientProps {
  name:  string;
  contact:  string;
  date: string;
  status: string;
  styles: string;
  internationMotive?: string;
  observations?: string;
};
interface PatientsProps {
  patients: PatientProps[],
  handleAddNewPatient: (newPatient: PatientProps) => any;
};

export const PatientsContext = createContext<PatientsProps>({} as PatientsProps);

export const PatientsProvider = (props: any) => {
  const [patients, setPatients] = useState<PatientProps[]>([
    {
      name: "Emerson Garrido",
      contact: "67 99350-8091",
      date: "10/05/2020",
      status: "Bom",
      styles: "default",
    },
    {
      name: "Emerson Garrido",
      contact: "67 99350-8091",
      date: "10/05/2020",
      status: "Regular",
      styles: "regular",
    },
    {
      name: "Emerson Garrido",
      contact: "67 99350-8091",
      date: "10/05/2020",
      status: "Crítico",
      styles: "warning",
    },
    {
      name: "Emerson Garrido",
      contact: "67 99350-8091",
      date: "10/05/2020",
      status: "Ótimo",
      styles: "success",
    },
    {
      name: "Emerson Garrido",
      contact: "67 99350-8091",
      date: "10/05/2020",
      status: "Regular",
      styles: "regular",
    },
    {
      name: "Emerson Garrido",
      contact: "67 99350-8091",
      date: "10/05/2020",
      status: "Crítico",
      styles: "warning",
    },
  ]);

  useEffect(() => {
    const existingPatients = localStorage.getItem('@fisioPront:patients')
    existingPatients? setPatients(JSON.parse(existingPatients)):
    localStorage.setItem('@fisioPront:patients', JSON.stringify(patients))
  },[])


  const handleAddNewPatient = (newPatient: PatientProps) => {
    const existingPatients = localStorage.getItem('@fisioPront:patients')
    
    const updatedPatients = existingPatients ? JSON.parse(existingPatients).concat(newPatient) :
    [newPatient]
    localStorage.setItem('@fisioPront:patients', JSON.stringify(updatedPatients))

    setPatients(updatedPatients)
  };

  const children = props.children;

  return (
    <PatientsContext.Provider value={{patients, handleAddNewPatient}}>
      {children}
    </PatientsContext.Provider>
  )
}
