/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import renderer from "react-test-renderer";

test("loads and displays logo", async () => {
	render(<Navbar />);

	// Assert that the logo image is rendered with the correct alt text
	expect(screen.getByAltText("logo")).toBeInTheDocument();
});

test("Navbar component snapshot", () => {
	const component = renderer.create(<Navbar />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
