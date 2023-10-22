import { createSlice } from "@reduxjs/toolkit";

// courseGroup initial data
const initialState = [
	{
		category: "Money Laundering and Fraud Prevention",
		imageSrc: "resources/fraud_prevention.png",
		courses: [
			{
				title:
					"Intensification of money laundering prevention - private customer advice",
				duration: 30,
				progress: 3,
				endDate: null,
			},
			{
				title:
					"Basic Training - Prevention of Money Laundering and Terrorist Financing (V3.0)",
				duration: 44,
				progress: 0,
				endDate: null,
			},
			{
				title:
					"Advanced Training - Prevention of Money Laundering and Terrorist Financing (V3.0)",
				duration: 22,
				progress: 0,
				endDate: null,
			},
		],
	},
	{
		category: "IT security and information security",
		imageSrc: "resources/it_security.png",
		courses: [
			{
				title: "IT security basics (V1.01.3)",
				duration: 40,
				progress: 0,
				endDate: new Date(2024, 2, 14),
			},
			{
				title: "Basic Training IT security and information security (V1.0)",
				duration: 60,
				progress: 3,
				endDate: null,
			},
			{
				title: "Advanced Training IT Security and Information Security (V1.1)",
				duration: 29,
				progress: 0,
				endDate: null,
			},
		],
	},
	{
		category: "Data Protection",
		imageSrc: "resources/data_protection.png",
		courses: [
			{
				title: "Basic training data protection (V2.0)",
				duration: 0,
				progress: 0,
				endDate: null,
			},
			{
				title: "Privacy Basics (V1.00.2)",
				duration: 40,
				progress: 0,
				endDate: null,
			},
			{
				title: "In-depth training on data protection (V1.0)",
				duration: 51,
				progress: 0,
				endDate: null,
			},
			{
				title: "Privacy Basics 1.0",
				duration: 40,
				progress: 3,
				endDate: null,
			},
		],
	},
	{
		category: "WpHG-Compliance",
		imageSrc: "resources/wphg.png",
		courses: [
			{
				title: "WpHG compliance basics (V1.00.3)",
				duration: 30,
				progress: 3,
				endDate: null,
			},
			{
				title: "In-depth WpHG - sales representative (V1.00.2)",
				duration: 44,
				progress: 0,
				endDate: null,
			},
		],
	},
];

export const coursesSlice = createSlice({
	name: "courses",
	initialState,
	reducers: {},
});

export default coursesSlice.reducer;
