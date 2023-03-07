import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-yen-value',
  templateUrl: './yen-value.component.html',
  styleUrls: ['./yen-value.component.scss']
})
export class YenValueComponent {
  @Output() onYenValueChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() yenValue: string;
  constructor() {this.yenValue='0'}

  ngOnInit() {
  }

  convertToUsd():void {
    let usd : string = (parseInt(this.yenValue)*0.009).toString();
    this.onYenValueChange.emit(usd);
  }
}
