import React from "react"
import { Loading } from "./Loading";
import { getUser } from "../services/userApi";

export class Home extends React.Component {
  state = {
    user: {},
  };

  componentDidMount() {
    this.getUserState()
  }

  getUserState = async () => {
    const updateUser = await getUser();
    this.setState({ user: updateUser });
  };

  render() {
    const { user: { name } } = this.state;

    return (
      <header>
        {!name ? (
          <Loading />
        ) : (
            <p>{name}</p>
        )}
      </header>
    )
  }
}
