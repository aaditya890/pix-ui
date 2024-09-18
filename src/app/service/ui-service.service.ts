import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {

  public serviceShowCode(blockId:string):void{
    const showcase = document.getElementById(`${blockId}-showcase`);
    const codeSection = document.getElementById(`${blockId}-code-section`);
  
    if (showcase && codeSection) {
      // Toggle visibility
      const isShowcaseVisible = !showcase.classList.contains('hidden');
  
      if (isShowcaseVisible) {
        // Hide component, show code
        showcase.classList.add('hidden');
        codeSection.classList.remove('hidden');
        codeSection.classList.add('fade-in');
      } else {
        // Show component, hide code
        codeSection.classList.add('hidden');
        showcase.classList.remove('hidden');
        showcase.classList.add('fade-in');
      }
    }
  }

  public serviceToggleCode(blockId:string, codeType:string):void{
    const htmlCode = document.getElementById(`${blockId}-html-code`);
    const jsCode = document.getElementById(`${blockId}-js-code`);
    const scriptCode = document.getElementById(`${blockId}-script-code`);
  
    // Hide all code sections
    htmlCode?.classList.add('hidden');
    jsCode?.classList.add('hidden');
    scriptCode?.classList.add('hidden');
  
    // Show the selected code type
    const selectedCode = document.getElementById(`${blockId}-${codeType}`);
    selectedCode?.classList.remove('hidden');
    selectedCode?.classList.add('fade-in');
  }

  public serviceCopyCode(id:string):void{
    const codeElement = document.getElementById(id);
    const codeText = codeElement?.innerText || '';
  
    navigator.clipboard.writeText(codeText).then(() => {
      alert('Code copied to clipboard!');
    }).catch((err) => {
      console.error('Failed to copy code: ', err);
    });
  }
  
}
