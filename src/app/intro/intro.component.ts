import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { UiServiceService } from '../service/ui-service.service';
@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [MatButton,MatIconModule,MatDividerModule,MatButtonModule],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {
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
