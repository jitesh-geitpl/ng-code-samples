import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public items: any[] = [];

    private item = {
        title: 'Header Item',
        date: '22/03/2022',
        desc: 'Lorem ipsum dolor amet.',
    };

    constructor() {
        this.items = Array.from({ length: 2 }).fill(this.item);
    }

    onRemoveItem(event: any) {
        console.log(event);
    }
}
