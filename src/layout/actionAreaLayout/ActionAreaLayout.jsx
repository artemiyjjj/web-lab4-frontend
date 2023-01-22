import UserInteraction from "../../modules/userInteraction/UserInteraction.jsx";
import ActionAreaOutput from "../../modules/tikable/actionAreaOutput/ActionAreaOutput.jsx";
import ActionAreaResults from "../../modules/results/actionAreaResults/ActionAreaResults.jsx";

const ActionAreaLayout = () => {

    return (
        <div className="action-area">
            <ActionAreaOutput />
            <UserInteraction />
            <ActionAreaResults />
        </div>
    )
}

export default ActionAreaLayout;