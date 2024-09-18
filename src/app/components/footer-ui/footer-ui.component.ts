import { Component, inject } from '@angular/core';
import { UiServiceService } from '../../service/ui-service.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-footer-ui',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './footer-ui.component.html',
  styleUrl: './footer-ui.component.scss'
})
export class FooterUiComponent {
  private uiService = inject(UiServiceService)
  block:any = {
    curleyOpen:`{`,
    curleyClose:`}`,
    lessOpen:'<',
    greatClose: '>'
  }

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
