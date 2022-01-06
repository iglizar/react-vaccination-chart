export interface IVaccine {
  id: number;
  name: string;
  backgroundColor?: string;
  color?: string;
  fullName?: string;
  recommendedAdministrations: IAdministration[];
}

export interface IVaccinationEvent{
  vaccine_id: number;
  dose_id: number;
  date: string;
}

export interface IPatient{
  name: string;
  born_date: string;
}

export interface IAdministration {
  name: string;
  period: number[];
} 
