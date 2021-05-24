import React from "react";
import ReactDOM from "react-dom";
import Start from "./Start";
import './styles/main.scss';

import { getLangText } from './language/Language';
getLangText('');

ReactDOM.render(<Start />, document.getElementById('app'));