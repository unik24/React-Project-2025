import "./App.css";
import MyButton from "./components/my-button";


function App() {
	return (
		<div>

			<div class="button-holder">
				<MyButton buttonType="primary">Primary</MyButton>
				<MyButton buttonType="secondary">Secondary</MyButton>
				<MyButton buttonType="cancel">Cancel</MyButton>
			</div>

			<div  class="button-holder">
				<MyButton buttonType="primary" buttonSize="large">Large</MyButton>
				<MyButton buttonType="secondary" buttonSize="medium">Medium</MyButton>
				<MyButton buttonType="cancel" buttonSize="small">Small</MyButton>
			</div>


			<div  class="button-holder">
				<MyButton buttonType="primary" buttonSize="large"  buttonDisabled={true}>L Disabled</MyButton>
				<MyButton buttonType="secondary" buttonSize="medium"  buttonDisabled={true}>M Disabled</MyButton>
				<MyButton buttonType="cancel" buttonSize="small"  buttonDisabled={true}>S Disabled</MyButton>
			</div>

		</div>
	);
}
export default App;
