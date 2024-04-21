import "semantic-ui-css/semantic.min.css";
import { DosingChartTable } from "./DosingChartTable";
import { PatientProfile } from "./PatientProfile";
import { default as VACCINES } from "assets/data/vaccines.json";

const DosingChart = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				padding: "20px 20px 40px 20px"
			}}
		>
			<DosingChartTable vaccines={VACCINES} />
			
			<PatientProfile />
		</div>
	);
};
export default DosingChart;
