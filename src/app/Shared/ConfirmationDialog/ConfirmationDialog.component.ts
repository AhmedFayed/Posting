import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './ConfirmationDialog.component.html',
})
export class ConfirmationDialogComponent implements OnInit {

  @Input() title: string;
  @Input() message: string;
  @Input() btnOkText: string;
  @Input() btnCancelText: string;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  public decline() {
    this.activeModal.close(false);
  }

  public accept() {
    this.activeModal.close(true);
  }

  public dismiss() {
    this.activeModal.close(false);
  }

}
