/* eslint-disable react/prop-types */
import Form from "../../Layout/Form/Form";
import { Link } from "react-router-dom";

function Sign(props) {
  const { title, caption, type = "login", btn, to} = props;
  return (
    <div>
      <Form title={title} caption={caption} text={btn} type={type} />
      <div className="mt-4 text-center">
        <p className="text-sm">
          {type == "login"
            ? "Dont have an account? "
            : "Already have an account? "}
          <Link to={to} className="text-blue-500 font-semibold">
            {type == "login" ? "Sign Up" : "Sign In"}
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Sign;
