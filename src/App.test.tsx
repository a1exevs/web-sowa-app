import React from 'react';
import ReactDOM from 'react-dom';
import SocialNetworkApp from './App';
import {unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";


let container: any = null;
beforeEach(() => {
  // подготавливаем DOM-элемент, куда будем рендерить
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // подчищаем после завершения
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders without crashing', () => {
  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    ReactDOM.render(<SocialNetworkApp />, container);
  });
});
