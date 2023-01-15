import {useSelector} from "react-redux";
import store from "../../../store/store.js";
import {inputFormActions} from "../../../store/slices/inputFormSlice.js";
import InputField from "./components/InputField.jsx";
import InputSelector from "./components/InputSelector.jsx";
import InputButtons from "./components/InputButtons.jsx";
import ActionButton from "./components/ActionButton.jsx";

import {useMakeShotMutation} from "../../../store/slices/api/controllerServlet/controllerServletApi.js";

const InputForm = () => {
    const x = useSelector(state => state.inputFormSlice.x);
    const y = useSelector(state => state.inputFormSlice.y);
    const r = useSelector(state => state.inputFormSlice.r);

    const setX = inputFormActions.setX;
    const setY = inputFormActions.setY;
    const setR = inputFormActions.setR;

    const [makeShot] = useMakeShotMutation();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(store.getState());
        makeShot({x,y,r});

    }

    return (
        <form className="action-area__input__form" onSubmit={handleSubmit}>
            <InputField name="xInput" placeholder="Insert number from '-3' to '3'"
                        label="X coordinate:" isRequired={true} setValue={setX}
                        className="action-area__input__form__xInput"/>

            <InputButtons name="yInput" label="Y coordinate:"
                          options={[-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2]}
                          className="action-area__input__form__yInput" setValue={setY}
                          selectedValue={y}
                          selectedClassName="action-area__input__form__yInput_selected"/>

            <InputSelector name="rInput" header="Select R value:" label="R coordinate:"
                           isRequired={true} setValue={setR} options={[1, 2, 3, 4]}
                           className="action-area__input__form__rInput"/>

            <ActionButton name="submitButton" id="button-send" text="Send"
                          className="action-area__input__form__send-button"
                          type="submit"/>

        </form>
    )
}

export default InputForm;