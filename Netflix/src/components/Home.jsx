import React from "react"
import { readUser } from "../services/userApi";

export class Home extends React.Component {
  state = {
    user: {},
  };

  componentDidMount() {
    this.getUserState()
  }

  getUserState = () => {
    const updateUser = readUser();
    this.setState({ user: updateUser });
  };

  render() {
    const { user: { name } } = this.state;

    return (
      <header className="text-zinc-100 border-b">
        <p className="p-4 text-[20px] text-left">{`Bem vindo! ${name}`}</p>
      </header>
    )
  }
}
