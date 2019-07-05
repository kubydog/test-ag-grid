import { Component, OnInit } from '@angular/core';
import {TextChangeService} from '../text-change.service';

@Component({
  selector: 'app-nest-dialog',
  templateUrl: './nest-dialog.component.html',
  styleUrls: ['./nest-dialog.component.css']
})
export class NestDialogComponent implements OnInit {

  constructor(private textChangeService: TextChangeService) { }

  ngOnInit() {
  }

  onClick() {
    this.textChangeService.checked$.next(!this.textChangeService.checked$.value);
  }

}
