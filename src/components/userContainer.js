import { useEffect } from "react";
import { fetchUsers } from "../redux/users/userAction";
import { connect } from "react-redux";

const UserContainer = (props) => {
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      {props.loading ? (
        "Loading"
      ) : props.error ? (
        <h2>{props.error}</h2>
      ) : (
        <div>
          <h2>Users list</h2>
          <div>
            {props.users && props.users.map((user) => <h3>{user.name}</h3>)}
          </div>
        </div>
      )}
    </div>
  );
};
const mapPropsToState = (state) => {
  return {
    loading: state.users.loading,
    users: state.users.users,
    error: state.users.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: dispatch(fetchUsers()),
  };
};
export default connect(mapPropsToState, mapDispatchToProps)(UserContainer);
