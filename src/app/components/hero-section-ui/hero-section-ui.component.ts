import { Component, inject } from '@angular/core';
import { UiServiceService } from '../../service/ui-service.service';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-hero-section-ui',
  standalone: true,
  imports: [MatIconModule,MatDividerModule,MatButtonModule],
  templateUrl: './hero-section-ui.component.html',
  styleUrl: './hero-section-ui.component.scss'
})
export class HeroSectionUiComponent {
  private uiService = inject(UiServiceService)

  showCode(blockId: string) {
    this.uiService.serviceShowCode(blockId)
  }
  
  toggleCode(blockId: string, codeType: string) {
   this.uiService.serviceToggleCode(blockId, codeType)
  }
  
  copyCode(id: string) {
   this.uiService.serviceCopyCode(id);
  }
}
