import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, inject, Input, Signal, TemplateRef } from '@angular/core';
import { ROUTER_OUTLET_DATA } from '@angular/router';

@Component({
  selector: 'overview',
  imports: [
    NgIf,
    NgTemplateOutlet
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.sass'
})
export class OverviewComponent {
  // @Input() template!: TemplateRef<any>
  data = inject(ROUTER_OUTLET_DATA) as Signal<TemplateRef<any>>
  
  constructor() {
    
  }
}
