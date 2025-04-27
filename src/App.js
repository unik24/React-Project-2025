import "./App.css";
import "./styles/global.scss";

import Button from "./components/Button";


function App() {
	return (
		<div>

			<div class="button-holder">
				<Button buttonType="primary">Primary</Button>
				<Button buttonType="secondary">Secondary</Button>
				<Button buttonType="cancel">Cancel</Button>
			</div>

			<div  class="button-holder">
				<Button buttonType="primary" buttonSize="large">Large</Button>
				<Button buttonType="secondary" buttonSize="medium">Medium</Button>
				<Button buttonType="cancel" buttonSize="small">Small</Button>
			</div>


			<div  class="button-holder">
				<Button buttonType="primary" buttonSize="large"  buttonDisabled={true}>L Disabled</Button>
				<Button buttonType="secondary" buttonSize="medium"  buttonDisabled={true}>M Disabled</Button>
				<Button buttonType="cancel" buttonSize="small"  buttonDisabled={true}>S Disabled</Button>
			</div>

		</div>
	);
}
export default App;

