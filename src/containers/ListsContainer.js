import { connect } from "react-redux";

import Lists from "../components/Lists";

const mapStateToProps = state => {
  // only gets array of ids
  // won't change ids even if they're edited
  return {
    lists: state.lists.ids
  };
};

export default connect(mapStateToProps)(Lists);
