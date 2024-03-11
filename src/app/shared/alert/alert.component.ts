import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-alert',
    imports:[CommonModule],
    standalone: true,
    templateUrl:'./alert.component.html',
    styleUrls:['./alert.component.css']
})
export class AlertComponent{
    @Input() message!: string;
    @Output() close = new EventEmitter<void>()
  


    onClose(){
        this.close.emit()
    }
}