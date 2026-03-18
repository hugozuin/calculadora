import { useState } from "react";

export function useCalculator() {
    const [displayValue, setDisplayValue] = useState("0");
    const [firstValue, setFirstValue] = useState<string | null>(null);
    const [operator, setOperator] = useState<string | null>(null);
    const [waitingForSecond, setWaitingForSecond] = useState(false);

    function handleNumber(num: string) {
        if (num === ',' && displayValue.includes(',')) return;

        if (waitingForSecond) {
            setDisplayValue(num === ',' ? '0,' : num);
            setWaitingForSecond(false);
        } else {
            setDisplayValue(displayValue === '0' ? num : displayValue + num);
        }
    }

    function handleOperator(op: string) {
        if (operator && !waitingForSecond) {
            handleEquals(op);
            return;
        }
        setFirstValue(displayValue);
        setOperator(op);
        setWaitingForSecond(true);
    }

    function handleEquals(nextOperator?: string) {
        if (!operator || !firstValue) return;

        const firstNum = parseFloat(firstValue.replace(',', '.'));
        const secondNum = parseFloat(displayValue.replace(',', '.'));

        let result = 0;
        if (operator === '+') result = firstNum + secondNum;
        if (operator === '-') result = firstNum - secondNum;
        if (operator === 'x') result = firstNum * secondNum;
        if (operator === '÷') result = secondNum !== 0 ? firstNum / secondNum : 0;

        const formatted = parseFloat(result.toFixed(10)).toString().replace('.', ',');

        setDisplayValue(formatted);

        if (nextOperator) {
            setFirstValue(formatted);
            setOperator(nextOperator);
            setWaitingForSecond(true);
        } else {
            setFirstValue(null);
            setOperator(null);
            setWaitingForSecond(false);
        }
    }
    
    function handleDelete() {
        if (displayValue.length === 1 || waitingForSecond) {
            setDisplayValue("0");
        } else {
            setDisplayValue(displayValue.slice(0, -1));
        }
    }

    function handleToggleSign() {
        if (displayValue === '0') return;

        setDisplayValue(displayValue.startsWith('-') ? displayValue.slice(1) : '-' + displayValue);
    }

    function handlePercent() {
        const value = parseFloat(displayValue.replace(',', '.'));
        const result = value / 100;

        setDisplayValue(parseFloat(result.toFixed(10)).toString().replace('.', ','));
    }

    function handleClear() {
        setDisplayValue('0');
        setFirstValue(null);
        setOperator(null);
        setWaitingForSecond(false);
    }

    return {
        displayValue,
        firstValue,
        operator,
        handleNumber,
        handleOperator,
        handleEquals,
        handleDelete,
        handleToggleSign,
        handlePercent,
        handleClear
    };

}