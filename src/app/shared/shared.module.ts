import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { AppInterceptor } from './services/interceptor/app.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from '../core/core.module';
import { AdminGuard } from '../core/guards/admin.guard';

@NgModule({
  declarations: [CarrouselComponent],
  imports: [CommonModule, CoreModule],
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
