import { useState } from "react";
import { Button } from "../ui/button";

interface FormProps {
    inputValue: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<FormProps> = ({
    inputValue,
    handleChange,
    handleSubmit,
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleChange} />
            <Button type="submit">Найти</Button>
        </form>
    );
};

export default Form;
