import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <button class="bnt btn-primary" [class.active]="isActive">Save</button>
    `
})
export class CoursesComponent {
    isActive = true;
}