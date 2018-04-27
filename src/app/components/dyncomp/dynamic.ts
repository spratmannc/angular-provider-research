import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: "[comp-holder]"
})
export class DynamicContainer {

    constructor(public viewContainerRef: ViewContainerRef) {}
}