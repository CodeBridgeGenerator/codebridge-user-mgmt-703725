import React from "react";
import { render, screen } from "@testing-library/react";

import RefPositionsPage from "../RefPositionsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders refPositions page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <RefPositionsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("refPositions-datatable")).toBeInTheDocument();
    expect(screen.getByRole("refPositions-add-button")).toBeInTheDocument();
});
