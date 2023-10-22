/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Breadcrumb from "./Breadcrump";

test("Breadcrumb component should render", async () => {
	render(<Breadcrumb />);

	// Assert that the breadcrumb text is present
	expect(
		screen.getByText("Home Page > e-Learning Courses")
	).toBeInTheDocument();

	// Assert that the user role is present
	expect(screen.getByText("admin")).toBeInTheDocument();
});

test("Breadcrumb component snapshot", () => {
	const component = renderer.create(<Breadcrumb />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
