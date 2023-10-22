/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import ContentArea from "./ContentArea";
import { store } from "../../store";
import renderer from "react-test-renderer";

test("ContentArea component should render", () => {
	render(
		<Provider store={store}>
			<ContentArea />
		</Provider>
	);

	expect(screen.getByText("e-Learning Courses")).toBeInTheDocument();

	expect(
		screen.getByText(
			"Intensification of money laundering prevention - private customer advice"
		)
	).toBeInTheDocument();
	expect(
		screen.getByText(
			"Basic Training - Prevention of Money Laundering and Terrorist Financing (V3.0)"
		)
	).toBeInTheDocument();
	expect(
		screen.getByText(
			"Advanced Training - Prevention of Money Laundering and Terrorist Financing (V3.0)"
		)
	).toBeInTheDocument();

	expect(screen.getByText("IT security basics (V1.01.3)")).toBeInTheDocument();
	expect(
		screen.getByText(
			"Basic Training IT security and information security (V1.0)"
		)
	).toBeInTheDocument();
	expect(
		screen.getByText(
			"Advanced Training IT Security and Information Security (V1.1)"
		)
	).toBeInTheDocument();

	expect(
		screen.getByText("Basic training data protection (V2.0)")
	).toBeInTheDocument();
	expect(screen.getByText("Privacy Basics (V1.00.2)")).toBeInTheDocument();
	expect(
		screen.getByText("In-depth training on data protection (V1.0)")
	).toBeInTheDocument();
	expect(screen.getByText("Privacy Basics 1.0")).toBeInTheDocument();

	expect(
		screen.getByText("WpHG compliance basics (V1.00.3)")
	).toBeInTheDocument();
	expect(
		screen.getByText("In-depth WpHG - sales representative (V1.00.2)")
	).toBeInTheDocument();
});

test("ContentArea component snapshot", () => {
	const component = renderer.create(
		<Provider store={store}>
			<ContentArea />
		</Provider>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
