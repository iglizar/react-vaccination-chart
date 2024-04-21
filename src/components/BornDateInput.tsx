import "semantic-ui-css/semantic.min.css";
import SemanticDatepicker from "react-semantic-ui-datepickers";

interface BornDateInputProps {
	onChange: (value: any) => void;
}

export const BornDateInput = (props: BornDateInputProps) => {
	const onChange = (event:any, data: any) => {
		props.onChange(data.value);
	};

	
	return (
		<div>
			BornDateInput
			<SemanticDatepicker onChange={onChange} />
		</div>
	);
};
