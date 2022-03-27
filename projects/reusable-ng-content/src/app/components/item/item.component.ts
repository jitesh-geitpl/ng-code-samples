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
    @Input() items: any[] = [];
    @Output() onRemoveItem: EventEmitter<any> = new EventEmitter();
    @Output() onAddItem: EventEmitter<any> = new EventEmitter();
    @ContentChild(TemplateRef) customTemplateRef!: TemplateRef<any>;

    addNewItem(event: any) {
        this.onAddItem.emit(event);
    }

    removeItem(indexItem: number) {
        this.onRemoveItem.emit(indexItem);
    }
}
