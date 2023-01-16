import {useSelector} from "react-redux";
import {inputField, inputButtons, inputSelector, actionButton} from "./consts/formConsts.js";
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
        makeShot({x,y,r});

    }

    return (
        <form className="action-area__input__form" onSubmit={handleSubmit}>
            <InputField name={inputField.name} placeholder={inputField.placeholder} type={inputField.type}
                        label={inputField.label} isRequired={inputField.isRequired} setValue={setX}
                        className={inputField.className} min={inputField.min} max={inputField.max}/>

            <InputButtons name={inputButtons.name} label={inputButtons.label}
                          options={inputButtons.options} className={inputButtons.className} setValue={setY}
                          selectedValue={y} type={inputButtons.type} selectedClassName={inputButtons.selectedClassName}/>

            <InputSelector name={inputSelector.name} header={inputSelector.header} label={inputSelector.label}
                           isRequired={inputSelector.isRequired} setValue={setR} options={inputSelector.options}
                           className={inputSelector.className}/>

            <ActionButton name={actionButton.name} id={actionButton.id} text={actionButton.text}
                          className={actionButton.className} type={actionButton.type}/>

        </form>
    )
}

export default InputForm;