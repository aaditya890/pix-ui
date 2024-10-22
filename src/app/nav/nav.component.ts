import { Component, Host, HostBinding, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Observable } from 'rxjs';
import { map, shareReplay, startWith } from 'rxjs/operators';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Router, RouterLink, RouterOutlet ,RouterModule } from '@angular/router';
import { OUR_ROUTES } from '../routes/define-routes';
import { _isNumberValue } from '@angular/cdk/coercion';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatListModule,
    MatIconModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    AsyncPipe,
  ]
})

export class NavComponent implements OnInit {
  @Input({transform:numberAttribute}) dummy = ""
  private breakpointObserver = inject(BreakpointObserver);
  private overlay = inject(OverlayContainer);
  constructor(private router:Router){}
  theming = new FormControl(false)
  @HostBinding('class') className = '';
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  darkClassName: string = 'theme-dark';
  lightClassName: string = 'theme-light';
  sideNavAutoComplete = new FormControl();
  filteredOptions!: Observable<any[]>;
  sideNavContents: string[] = [
    "Introduction",
    // "Components",
    // "Build Website",
    "Footer Section",
    "Hero Sections",
    "Grid Layouts",
    "Team Section",
    "404 Page",
    "Cards",
    "Buttons",
    "Input",
    "Tables",
    "Headers",
    "Navbars",
    "Side Bars",
    "Alerts Bar"
  ];

  ngOnInit(): void {
    this.filteredOptions = this.sideNavAutoComplete.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );
    console.log(this.dummy);
    

    this.theming.valueChanges.subscribe((darkMode: any) => {
      this.className = darkMode ? this.darkClassName : this.lightClassName;
      if (darkMode) {
        this.overlay.getContainerElement().classList.add(this.darkClassName)
      } else {
        this.overlay.getContainerElement().classList.remove(this.darkClassName)
      }
    })
  }

  public sideNavAutoCompleteOptionSelected(event: any) {
    console.log("Selected Value", event.option.value);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.sideNavContents.filter(option => option.toLowerCase().includes(filterValue));
  }

  // getters section
  get navigateToIntroduction(){
    return this.router.navigate([OUR_ROUTES.introduction])
  }

  get navigateToFooter(){
    return this.router.navigate([OUR_ROUTES.footer])
  }

  get navigateToHeroSection(){
    return this.router.navigate([OUR_ROUTES.heroSection])
  }

  get navigateToTeamSection(){
    return this.router.navigate([OUR_ROUTES.teamSection])
  }

}
