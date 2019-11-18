import { connect } from "react-redux";

import CreateCard from "../components/CreateCard";

const defaultCardData = {
  title: "",
  description: "",
  assignedTo: ""
};

// always has to return an object
const mapDispatchToProps = dispatch => {
  return {
    createCard(listId, cardData) {
      // cheat unique
      const cardId = Date.now().toString();

      // last destructure overrides prev properties
      const card = {
        id: cardId,
        ...defaultCardData,
        ...cardData
      };

      dispatch({ type: "CREATE_CARD", payload: { card, listId, cardId } });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateCard);
