import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <h2 [textContent]="title"></h2>
        <img src="{{ imageUrl }}" />
        <img [src]="imageUrl" />
    `
})
export class CoursesComponent {
    title = "List of courses";
    imageUrl = "http://fakeimg.pl/400x200/";
}