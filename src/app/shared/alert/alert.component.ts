import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-alert',
    imports:[CommonModule],
    standalone: true,
    templateUrl:'./alert.component.html',
    styleUrls:['./alert.component.css']
})
export class AlertComponent{
    @Input() message!: string;
}