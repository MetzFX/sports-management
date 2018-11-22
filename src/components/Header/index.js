import React, { Component } from "react";
import { Menu, Segment, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class MenuExampleInvertedSegment extends Component {
	state = { activeItem: "home" };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;

		return (
			<Segment inverted>
				<Menu inverted secondary>
					<Menu.Item
						name="home"
						active={activeItem === "home"}
						onClick={this.handleItemClick}
					/>
					<Menu.Item
						name="Today's Ball"
						active={activeItem === "today's ball"}
						onClick={this.handleItemClick}
					/>
					<Menu.Item
						name="Competitions"
						active={activeItem === "Competitions"}
						onClick={this.handleItemClick}
					/>

					<Menu.Menu position="right">
						<Menu.Item>
							<Link to="/register">
								<Button primary>Sign Up</Button>{" "}
							</Link>
						</Menu.Item>
						<Menu.Item>
							<Link to="/login">
								<Button primary>Login</Button>
							</Link>
						</Menu.Item>
					</Menu.Menu>
				</Menu>
			</Segment>
		);
	}
}
