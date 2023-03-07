import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-usd-value',
  templateUrl: './usd-value.component.html',
  styleUrls: ['./usd-value.component.scss']
})
export class UsdValueComponent implements OnInit {
  @Output() onUsdValueChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() usdValue: string;

  constructor() {this.usdValue='0'
  }

  ngOnInit() {
  }

  convertToYen():void {
    let yen : string = (parseInt(this.usdValue)*110).toString();
    this.onUsdValueChange.emit(yen);
  }
}
