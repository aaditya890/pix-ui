import { Component, HostListener, inject, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatChip, MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'
import { NavComponent } from "./nav/nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatChipsModule, MatChip, CommonModule, MatButtonModule, MatChipsModule, MatIconModule, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {

  ngOnInit(): void {}

  isMenuVisible: boolean = false;

  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
