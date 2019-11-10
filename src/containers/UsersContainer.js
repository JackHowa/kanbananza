import { connect } from "react-redux";
import Users from "../components/Users";

const mapStateToProps = state => {
  return {
    userIds: state.users.ids
  };
};

export default connect(mapStateToProps)(Users);
