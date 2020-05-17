import React, { Component } from "react"
import { Link } from "gatsby"

export default class blog extends Component {
  render() {
    return (
      <div>
        Hello from Blog Page!!!
        <Link to="/">Home</Link>
      </div>
    )
  }
}
