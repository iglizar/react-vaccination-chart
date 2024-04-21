import { Card } from "semantic-ui-react";
import { default as PATIENT_DATA } from "assets/data/patient.json";
import { default as VACCINES } from "assets/data/vaccines.json";
import { default as VACCINATIONS } from "assets/data/vaccinations.json";
import { IVaccinationEvent, IPatient } from "models/interfaces";

export const PatientProfile = () => {
	const patient = PATIENT_DATA as IPatient;

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
				{VACCINATIONS.map((vaccination: IVaccinationEvent) => (
					<>
						{vaccination.date} - {VACCINES[vaccination.vaccine_id].name} - Dose
						number {vaccination.dose_id}
					</>
				))}
			</Card.Content>
		</Card>
	);
};
