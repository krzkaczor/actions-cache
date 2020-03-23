import * as core from "@actions/core";
import { Inputs } from "./constants";

async function run(): Promise<void> {
    const mode = core.getInput(Inputs.Mode, { required: true });

    switch (mode) {
        case "save":
            require("../save");
        case "restore":
            require("../restore");
        default:
            throw new Error(
                `Invalid mode ${mode}! Valid modes: 'save' or 'restore'`
            );
    }
}

run();

export default run;
