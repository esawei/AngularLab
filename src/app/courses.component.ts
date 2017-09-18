import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <button class="bnt btn-primary">Save</button>
    `
})
export class CoursesComponent {
    title = "List of courses";
    imageUrl = "http://fakeimg.pl/400x200/";
}