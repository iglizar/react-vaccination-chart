import { useState } from "react";
import { Checkbox, Table } from "semantic-ui-react";
import { IVaccine, IVaccinationEvent } from "models/interfaces";
import vaccinations from "assets/data/vaccinations.json";
import vaccines_dates from "assets/data/vaccines_dates.json";

interface DosingChartProps {
	vaccines: IVaccine[];
}

const getPeriod = (vaccine: IVaccine, dateIndex: number) => {
	return vaccine.recommendedAdministrations.find(
		(administration) => administration.period.indexOf(dateIndex) > -1
	);
};
const isFirstPeriod = (vaccine: IVaccine, dateIndex: number) => {
	return (
		vaccine.recommendedAdministrations.find(
			(administration) => administration.period.indexOf(dateIndex) > -1
		)?.period[0] === dateIndex
	);
};
const isLastPeriod = (vaccine: IVaccine, dateIndex: number) => {
	const vaccineAux = vaccine.recommendedAdministrations.find(
		(administration) => administration.period.indexOf(dateIndex) > -1
	);
	return vaccineAux?.period[vaccineAux?.period.length - 1] === dateIndex;
};
const didApplyVaccine = (
	vaccine_id: IVaccinationEvent["vaccine_id"],
	dose_id: IVaccinationEvent["dose_id"]
) =>
	vaccinations.find(
		(vaccination: IVaccinationEvent) =>
			vaccination.vaccine_id === vaccine_id && vaccination.dose_id === dose_id
	);

export const DosingChartTable = (props: DosingChartProps) => {
	const [showOnlyApplied, setShowOnlyApplied] = useState<boolean>(true);

	return (
		<>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					width:"100%"
				}}
			>
				<div
					style={{
						fontWeight: "bolder",
						fontSize: "21px",
					}}>
					Immunization Dosing Chart for Infants to Preschool-Aged Children
				</div>
				<Checkbox
					onChange={() => {
						setShowOnlyApplied(!showOnlyApplied);
					}}
					style={{ fontSize:"17px" }}
					label="Show applied vaccines only"
				/>
			</div>
			<Table fixed celled compact>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell
							style={{
								backgroundColor: "#181B38",
								color: "white",
								paddingBottom: "3px"
							}}
							width="2"
							verticalAlign="bottom"
							textAlign="center"
						>
							VACCINE
						</Table.HeaderCell>
						{vaccines_dates.map((dates, i) => (
							<Table.HeaderCell
								style={{
									backgroundColor: "#181B38",
									color: "white",
									paddingBottom: "5px"
								}}
								verticalAlign="bottom"
								textAlign="center"
								key={i}
							>
								{dates}
							</Table.HeaderCell>
						))}
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{props.vaccines.map((vaccine: IVaccine, vaccine_i: number) => (
						<Table.Row style={{ height: "60px" }} key={vaccine_i}>
							<Table.Cell
								style={{
									backgroundColor: "#F8F8F8",
									borderTop: "0px",
									borderLeft: "2px solid #D2D4D7",
									fontWeight: "bolder"
								}}
							>
								{vaccine.name}
							</Table.Cell>
							{vaccines_dates.map((date, date_i) => (
								<Table.Cell
									key={date_i}
									style={{
										padding: "0",
										borderTop: "0px",
										borderLeft: date_i !== 0 ? "2px solid #D2D4D7" : "none"
									}}
								>
									<div style={{ display: "grid", alignItems: "center" }}>
										{getPeriod(vaccine, date_i) && (
											<div
												className="period-shadow"
												style={{
													backgroundColor: vaccine.backgroundColor,
													opacity: "0.3",
													height: "36px",
													display: "flex",
													flexDirection: "column",
													justifyContent: "center",
													borderTopLeftRadius: isFirstPeriod(vaccine, date_i)
														? "15px"
														: "",
													borderBottomLeftRadius: isFirstPeriod(vaccine, date_i)
														? "15px"
														: "",
													borderTopRightRadius: isLastPeriod(vaccine, date_i)
														? "15px"
														: "",
													borderBottomRightRadius: isLastPeriod(vaccine, date_i)
														? "15px"
														: ""
												}}
											></div>
										)}
										{isFirstPeriod(vaccine, date_i) && (
											<div
												style={{
													display:
														showOnlyApplied &&
															!didApplyVaccine(vaccine.id, date_i)
															? "none"
															: "flex",
													backgroundColor:
														showOnlyApplied &&
															!didApplyVaccine(vaccine.id, date_i)
															? "transparent"
															: vaccine.backgroundColor,
													color: vaccine.color,
													position: "absolute",
													height: "34px",
													zIndex: 999,
													marginLeft: "1px",
													fontWeight: 600,
													padding: isFirstPeriod(vaccine, date_i)
														? "8px 12px 8px 12px"
														: "",
													flexDirection: "column",
													justifyContent: "center",
													borderRadius: "15px"
												}}
											>
												{getPeriod(vaccine, date_i)?.period[0] === date_i
													? getPeriod(vaccine, date_i)?.name
													: null}
											</div>
										)}
									</div>
								</Table.Cell>
							))}
						</Table.Row>
					))}
				</Table.Body>
			</Table>
		</>
	);
};
