import React from "react";
import CargoLayout from "./layouts/CargoLayout";


/**
 * We do our routings here at this level, as well as global components, such as top nav bar
 * Routings will look like a state machine(doesn't really have to)
 */
const MainApp = () => {
    return (
        <CargoLayout/>
    );
}

export default MainApp;
