import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DropdownDirective } from '../shared/dropdown.directive';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DropdownDirective, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService) {}

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchingRecipes().subscribe();
  }
}
