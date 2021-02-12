/* eslint no-eval: 0 */
import React, {useState, useEffect} from "react";
import words from "lodash.words";
import {Result} from "./components/Result";
import {Numbers} from "./components/Numbers";
import {MathOperations} from "./components/MathOperations";
import {Functions} from "./components/Functions";
import "./App.css";

const App = () => {

	const [stack, setStack] = useState("");

	useEffect(() => {
		const handleKeyUp = (evt: KeyboardEvent) => {
			const keyUpNumbersAllowed = ["0","1","2","3","4","5","6","7","8","9"];
			const keyUpOperatorsAllowed = ["/", "*", "-", "+"];
			
			if(keyUpNumbersAllowed.includes(evt.key) || keyUpOperatorsAllowed.includes(evt.key))
				setStack(`${stack}${evt.key}`);
	
			if(evt.key === "Enter")
				setStack(eval(stack).toString());
		};

		window.addEventListener("keyup", handleKeyUp);

		return () => {
			window.removeEventListener("keyup", handleKeyUp);
		}
	}, [stack]);


	const items: string[] = words(stack, /[^-^+^*^/]+/g);
	const result: string = items.length > 0 ? items[items.length-1] : "0";
	
	return (
		<main className = "react-calculator">
			<Result value = {result}/>
			<Numbers onClickNumber = {(number: string) => setStack(`${stack}${number}`)}/>
			<Functions
				onClear = {() => setStack("")}
				onDelete = {() => {
					if(stack.length > 0) {
						const newStack = stack.substring(0, stack.length - 1);
						setStack(newStack);
					}
				}}
			/>
			<MathOperations 
				onClickOperation = {(operation: string) => setStack(`${stack}${operation}`)}
				onClickEqual = {(equal: string) => setStack(eval(stack).toString())}
				/>
		</main>
	);
};

export default App;