import "semantic-ui-css/semantic.min.css";
import SemanticDatepicker from "react-semantic-ui-datepickers";

interface Props {
  onChange: any;
}

export const BornDateInput = (props: Props) => {
  const onChange = (event: any, data: any) => {
    props.onChange(data.value);
  };

  return (
    <div>
      BornDateInput
      <SemanticDatepicker onChange={onChange} />
    </div>
  );
};
