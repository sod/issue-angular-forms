import {Component, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-lazy-forms',
  template: `
    <div>lazy-forms - radio buttons!</div>
    <div><button (click)="visible$.next(!visible$.value)">toggle visibility</button></div>
    <div *ngIf="visible$ | async">
      <div>
        input type="text" works: <input type="text" [(ngModel)]="inputValue"> - value: {{ inputValue }}
      </div>

      <div>
        input type="radio" fails (see console):
        <div *ngFor="let item of [1,2,3,4]">
          <input type="radio" [(ngModel)]="radioValue" [value]="item">
          {{ item }}
        </div>
        - value: {{ radioValue }}
      </div>
    </div>
  `,
  styles: [
  ]
})
export class LazyFormsComponent {
  visible$ = new BehaviorSubject<boolean>(false)
  radioValue = 1;
  inputValue = 'initial input value';
}

@NgModule({
  declarations: [LazyFormsComponent],
  imports: [CommonModule, FormsModule],
})
class LazyFormsModule {}
