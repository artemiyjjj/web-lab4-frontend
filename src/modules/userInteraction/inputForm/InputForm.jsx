import {useDispatch, useSelector} from "react-redux";
import {useMakeShotMutation} from "src/store/slices/api/controllerServlet/controllerServletApi.js";
import {inputField, inputButtons, inputSelector, actionButton} from "./consts/formConsts.js";
import InputField from "src/components/InputField.jsx";
import InputSelector from "src/components/InputSelector.jsx";
import InputButtons from "src/components/InputButtons.jsx";
import ActionButton from "src/components/ActionButton.jsx";
import {inputFormActions} from "src/store/slices/inputFormSlice.js";

const InputForm = () => {
    const dispatch = useDispatch();
    const x = useSelector(state => state.inputFormSlice.x);
    const y = useSelector(state => state.inputFormSlice.y);
    const r = useSelector(state => state.inputFormSlice.r);
    const setX = inputFormActions.setX;
    const setY = inputFormActions.setY;
    const setR = inputFormActions.setR;

    const handleChange = (event, setValue) => {
        dispatch(setValue(event.target.value))
    }

    const [makeShot] = useMakeShotMutation();

    const handleSubmit = (event) => {
        event.preventDefault();
        makeShot({x,y,r});

    }

    return (
        <form className="action-area__input__form" onSubmit={handleSubmit}>
            <InputField name={inputField.name} placeholder={inputField.placeholder} type={inputField.type}
                        label={inputField.label} isRequired={inputField.isRequired} setValue={(event) => handleChange(event, setX)}
                        className={inputField.className} min={inputField.min} max={inputField.max}/>

            <InputButtons name={inputButtons.name} label={inputButtons.label}
                          options={inputButtons.options} className={inputButtons.className} setValue={(event) => handleChange(event, setY)}
                          selectedValue={y} type={inputButtons.type} selectedClassName={inputButtons.selectedClassName}/>

            <InputSelector name={inputSelector.name} header={inputSelector.header} label={inputSelector.label}
                           isRequired={inputSelector.isRequired} setValue={(event) => handleChange(event, setR)}
                           options={inputSelector.options} className={inputSelector.className}/>

            <ActionButton name={actionButton.name} id={actionButton.id} text={actionButton.text}
                          className={actionButton.className} type={actionButton.type}/>

        </form>
    )
}

export default InputForm;