const formConsts = {
    inputField: {
        name: "xInput",
        label: "X coordinate:",
        placeholder: "Insert number from '-3' to '3'",
        className: "action-area__input__form__xInput",
        type: "number",
        isRequired: true,
        min: -3,
        max: 3
    },
    inputButtons: {
        name: "yInput",
        label: "Y coordinate:",
        className: "action-area__input__form__yInput",
        selectedClassName: "action-area__input__form__yInput_selected",
        type: "button",
        options: [-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2],
    },
    inputSelector: {
        name: "rInput",
        label: "R coordinate:",
        header: "Select R value:",
        className: "action-area__input__form__rInput",
        isRequired: true,
        options: [1, 2, 3, 4],
    },
    actionButton: {
        name: "submitButton",
        id: "button-send",
        text: "Send",
        className: "action-area__input__form__send-button",
        type: "submit"
    }
}

export const {
    inputField,
    inputButtons,
    inputSelector,
    actionButton
} = formConsts