import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  template: `
    <div (click)="onContainerClicked($event)" class="modal fade" tabindex="-1" [ngClass]="{'in': visibleAnimate}"
         [ngStyle]="{'padding-top':'100px','display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <ng-content select=".app-modal-header"></ng-content>
          </div>
          <div class="modal-body">
            <div *ngIf="errorMessage" class="alert-danger alert">
              <p>{{errorMessage}}</p>
            </div>
            <ng-content select=".app-modal-body"></ng-content>
          </div>
          <div class="modal-footer">
            <ng-content select=".app-modal-footer"></ng-content>
          </div>
        </div>
      </div>
    </div>
    `
})
export class ModalComponent {
  errorMessage: string;
  public visible = false;
  public visibleAnimate = false;

  public show(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
    this.errorMessage = null;
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }
  public setErrorMessage(msg: string): void {
    this.errorMessage = msg;
  }
}
