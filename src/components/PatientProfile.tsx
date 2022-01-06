import React from "react";
import { Card } from "semantic-ui-react";
import _patient from "assets/data/patient.json";
import vaccines from "assets/data/vaccines.json";
import vaccinations from "assets/data/vaccinations.json";
import { IVaccinationEvent, IPatient } from "models/interfaces";

export const PatientProfile = () => {
  const patient = _patient as IPatient;

  return (
    <Card>
      <Card.Content>
        <Card.Header>{patient.name}</Card.Header>
        <Card.Meta>
          <span className="date">Born in {patient.born_date}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content>
        <h4>Vaccinations:</h4>
        {vaccinations.map((vaccination: IVaccinationEvent) => (
          <>
            {vaccination.date} - {vaccines[vaccination.vaccine_id].name} - Dose
            number {vaccination.dose_id}
          </>
        ))}
      </Card.Content>
    </Card>
  );
};
