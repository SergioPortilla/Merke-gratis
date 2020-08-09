import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrouselComponent } from './components/carrousel/carrousel.component';

@NgModule({
  declarations: [CarrouselComponent],
  imports: [CommonModule],
  exports: [CarrouselComponent]
})
export class AuthenticationSharedModule {}
