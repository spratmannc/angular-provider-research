import { IForm, FormNames } from "../../business/form";
import { FormA } from "./forma";
import { FormB } from "./formb";

export const AvailableForms: Map<FormNames, new() => IForm> = new Map();

AvailableForms.set("FormA", FormA);
AvailableForms.set("FormB", FormB);
