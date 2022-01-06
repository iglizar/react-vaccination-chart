import "semantic-ui-css/semantic.min.css";
import { DosingChartTable } from "./DosingChartTable";
import { PatientProfile } from "./PatientProfile";
import vaccines from "assets/data/vaccines.json";

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
      <PatientProfile />
      <div
        style={{
          fontWeight: "bolder",
          fontSize: "21px",
          padding: "20px 0 0 0"
        }}
      >
        Immunization Dosing Chart for Infants to Preschool-Aged Children
      </div>
      <DosingChartTable vaccines={vaccines} />
    </div>
  );
};
export default DosingChart;
