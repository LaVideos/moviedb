import React, { FC } from 'react';
import styles from "./input-search-component.module.css";
import cn from "classnames";
import {InputBase, Paper} from "@mui/material";

interface InputProps {
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    query: string;
    size:  "large";
}

const InputSearchComponent: FC<InputProps> = ({ handleChange, query, handleSubmit, size }) => {

    return  <Paper
        component="span"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}

    >
        <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Enter movie title"
            type="text"
            value={query}
            onChange={handleChange}
            onKeyDown={handleSubmit}
            onSubmit={handleSubmit}
        />
    </Paper>
};

export default InputSearchComponent;
