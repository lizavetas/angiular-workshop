import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public titleVar = '@input property as variable';
    title = 'app';

    onClicked(event) {
        console.log(event);
    }
}
