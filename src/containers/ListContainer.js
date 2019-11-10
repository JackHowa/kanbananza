import { connect } from "react-redux";

import List from "../components/List";

// figure out which list based on incoming list id
const mapStateToProps = (state, ownProps) => {
  return { list: state.lists.entities[ownProps.listId] };
};

export default connect(mapStateToProps)(List);
