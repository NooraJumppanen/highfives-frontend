import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Testing the Form", () => {
	test('Renders "how likely" text', () => {
		render(<App />);
		const text = screen.getByText(/how likely/i);
		expect(text).toBeInTheDocument();
	});

	test("There are score buttons", () => {
		render(<App />);

		const Button0 = screen.getByLabelText("0");
		const Button1 = screen.getByLabelText("1");
		const Button2 = screen.getByLabelText("2");
		const Button3 = screen.getByLabelText("3");
		const Button4 = screen.getByLabelText("4");
		const Button5 = screen.getByLabelText("5");
		const Button6 = screen.getByLabelText("6");
		const Button7 = screen.getByLabelText("7");
		const Button8 = screen.getByLabelText("8");
		const Button9 = screen.getByLabelText("9");
		const Button10 = screen.getByLabelText("10");

		expect(Button0).toBeInTheDocument();
		expect(Button1).toBeInTheDocument();
		expect(Button2).toBeInTheDocument();
		expect(Button3).toBeInTheDocument();
		expect(Button4).toBeInTheDocument();
		expect(Button5).toBeInTheDocument();
		expect(Button6).toBeInTheDocument();
		expect(Button7).toBeInTheDocument();
		expect(Button8).toBeInTheDocument();
		expect(Button9).toBeInTheDocument();
		expect(Button10).toBeInTheDocument();
	});

	test("There are the correct numbers inside of score buttons", () => {
		render(<App />);

		const Button0 = screen.getByLabelText("0");
		const Button1 = screen.getByLabelText("1");
		const Button2 = screen.getByLabelText("2");
		const Button3 = screen.getByLabelText("3");
		const Button4 = screen.getByLabelText("4");
		const Button5 = screen.getByLabelText("5");
		const Button6 = screen.getByLabelText("6");
		const Button7 = screen.getByLabelText("7");
		const Button8 = screen.getByLabelText("8");
		const Button9 = screen.getByLabelText("9");
		const Button10 = screen.getByLabelText("10");

		expect(Button0).toHaveTextContent("0");
		expect(Button1).toHaveTextContent("1");
		expect(Button2).toHaveTextContent("2");
		expect(Button3).toHaveTextContent("3");
		expect(Button4).toHaveTextContent("4");
		expect(Button5).toHaveTextContent("5");
		expect(Button6).toHaveTextContent("6");
		expect(Button7).toHaveTextContent("7");
		expect(Button8).toHaveTextContent("8");
		expect(Button9).toHaveTextContent("9");
		expect(Button10).toHaveTextContent("10");
	});

	test('Renders "0 = Extremely unlikely" text', () => {
		render(<App />);
		const text = screen.getByText("0 = Extremely unlikely");
		expect(text).toBeInTheDocument();
	});

	test('Renders "10 = Extremely likely" text', () => {
		render(<App />);
		const text = screen.getByText("10 = Extremely likely");
		expect(text).toBeInTheDocument();
	});

	test('Renders "please comment" text', () => {
		render(<App />);
		const text = screen.getByText(/please comment/i);
		expect(text).toBeInTheDocument();
	});

	test("Renders the comments area", () => {
		render(<App />);
		const textBox = screen.getByLabelText("comments area");
		expect(textBox).toBeInTheDocument();
	});

	test("There is a send button", () => {
		render(<App />);
		const Button = screen.getByLabelText("send");
		expect(Button).toBeInTheDocument();
		expect(Button).toHaveTextContent("Send");
	});
});
