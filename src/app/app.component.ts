import { Component } from '@angular/core';
import {defer} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    create lazy form radio buttons from chunk fails:
    <ng-container *ngComponentOutlet="lazyForms$ | async"></ng-container>
  `,
})
export class AppComponent {
  title = 'issue-angular-forms';
  lazyForms$ = defer(() => import(/* webpackChunkName: "lazy-forms" */ './lazy-forms/lazy-forms.component')).pipe(map(module => module.LazyFormsComponent))
}
