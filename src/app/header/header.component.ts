import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature:string){
    this,this.featureSelected.emit(feature)

  }
  

}
