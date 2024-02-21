import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DropdownDirective } from '../shared/dropdown.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DropdownDirective, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this, this.featureSelected.emit(feature);
  }
}
