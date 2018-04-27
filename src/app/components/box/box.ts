import { Component, Inject, ComponentFactoryResolver, ViewChild, OnInit, ViewContainerRef, ComponentFactory } from "@angular/core";
import { THEME } from "../../services/theme.provider";
import { ITheme } from "../../business/theme";
import { DynamicContainer } from "../dyncomp/dynamic";
import { IUser } from "../../business/user";
import { USER } from "../../services/user.provider";
import { IForm, FormNames } from "../../business/form";
import { AvailableForms } from "../forms/forms";

@Component({
    selector: "box",
    templateUrl: "./box.html",
    styleUrls: [
        "./box.less"
    ]
})
export class MyBox implements OnInit {

    foregroundColor: string;
    backgroundColor: string = "#009933";
    formName: string;

    @ViewChild(DynamicContainer)
    dynamicHost: DynamicContainer;

    constructor(@Inject(THEME) private theme: ITheme,
                @Inject(USER) private user: IUser,
                private componentFactoryResolver: ComponentFactoryResolver) {

        // option a: choose colors from theme
        this.backgroundColor = theme.backgroundColor;
        this.foregroundColor = theme.foregroundColor;

        // option b: choose child component dynamically
    }

    ngOnInit(): void {
        // choose the component to load
        let container: ViewContainerRef = this.dynamicHost.viewContainerRef;
        container.clear();

        // choose correct form
        let form: new() => IForm = AvailableForms.get(this.user.form as FormNames);

        try {

            // now load the form factory
            let factory: ComponentFactory<IForm> = this.componentFactoryResolver
            .resolveComponentFactory<IForm>(form);

            // now instantiate the component
            let instance: IForm = container.createComponent(factory).instance;

            // now display the form name
            this.formName = instance.name;
        } catch(e) {
            console.log("No form found");
        }
    }
}