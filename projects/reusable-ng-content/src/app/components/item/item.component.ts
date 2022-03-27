import {
    Component,
    ContentChild,
    EventEmitter,
    Input,
    Output,
    TemplateRef,
} from '@angular/core';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
    private item = {
        title: 'Header Item',
        date: '22/03/2022',
        desc: 'Lorem ipsum dolor amet.',
    };

    @Input() items: any[] = [];
    @Output() onRemoveItem: EventEmitter<any> = new EventEmitter();

    @ContentChild(TemplateRef) customTemplateRef!: TemplateRef<any>;

    constructor() {}

    addNewItem() {
        this.items.push(this.item);
    }

    removeItem(indexItem: number) {
        try {
            this.onRemoveItem.emit(this.items.splice(indexItem, 1)[0]);
        } catch (e) {
            this.onRemoveItem.emit(e);
            console.log(e);
        }
    }
}
