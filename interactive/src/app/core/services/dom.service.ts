import {
  Injectable,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  EmbeddedViewRef,
  ComponentRef,
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DomService {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
  ) { }

  createComponent(component: any) {
    return this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector);
  }

  appendComponent(
    componentRef: ComponentRef<any>,
    config?: { parentId?: string, closeTime?: number }
  ) {
    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    let container: HTMLElement;
    if (config) {
      const parentId = config.parentId;
      container = parentId ? document.getElementById(parentId) : document.body;
      container.appendChild(domElem);
      if (config.closeTime) {
        setTimeout(() => {
          this.appRef.detachView(componentRef.hostView);
          componentRef.destroy();
        }, config.closeTime);
      }
    } else {
      container.appendChild(domElem);
    }
  }
}
