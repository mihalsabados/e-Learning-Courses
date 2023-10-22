/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import Sidebar from "./Sidebar";
import renderer from "react-test-renderer";

test("Sidebar component should render", async () => {
	render(<Sidebar />);

	// Assert that the navigation header is present
	expect(screen.getByText("Navigation")).toBeInTheDocument();

	// Assert that each navigation item is present
	expect(screen.getByAltText("Fraud Prevention")).toBeInTheDocument();
	expect(
		screen.getByText("Money Laundering and Fraud Prevention")
	).toBeInTheDocument();

	expect(screen.getByAltText("It Security")).toBeInTheDocument();
	expect(
		screen.getByText("IT security and information security")
	).toBeInTheDocument();

	expect(screen.getByAltText("Data Protection")).toBeInTheDocument();
	expect(screen.getByText("Data Protection")).toBeInTheDocument();

	expect(screen.getByAltText("WpHG")).toBeInTheDocument();
	expect(screen.getByText("WpHG-Compliance")).toBeInTheDocument();

	// Assert that the contact header is present
	expect(screen.getByText("Contact")).toBeInTheDocument();

	// Assert that each contact item is present
	expect(screen.getByText("Technical support")).toBeInTheDocument();
	expect(screen.getByText("John Doe")).toBeInTheDocument();
	expect(screen.getByText("it@example.com")).toBeInTheDocument();

	expect(screen.getByText("Content-didactic topics")).toBeInTheDocument();
	expect(screen.getByText("Jane Roe")).toBeInTheDocument();
	expect(screen.getByText("content@example.com")).toBeInTheDocument();
});

test("Email links in Sidebar component should have right href", () => {
	render(<Sidebar />);

	expect(screen.getByRole("link", { name: "it@example.com" })).toHaveAttribute(
		"href",
		"mailto: it@example.com"
	);
	expect(
		screen.getByRole("link", { name: "content@example.com" })
	).toHaveAttribute("href", "mailto: content@example.com");
});

test("Sidebar component snapshot", () => {
	const component = renderer.create(<Sidebar />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
