import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { AppInterceptor } from './services/interceptor/app.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [CarrouselComponent],
  imports: [CommonModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true
    }
  ],
  exports: [CarrouselComponent]
})
export class SharedModule {}
