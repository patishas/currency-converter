import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Currency Converter";

  yenValue : string = '0';
  usdValue : string = '0';

  onUsdValueChange(value: string) {
    this.yenValue=value;
  }

  onYenValueChange(value: string) {
    this.usdValue=value;
  }
}
