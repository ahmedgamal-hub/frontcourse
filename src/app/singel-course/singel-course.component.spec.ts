import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingelCourseComponent } from './singel-course.component';

describe('SingelCourseComponent', () => {
  let component: SingelCourseComponent;
  let fixture: ComponentFixture<SingelCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingelCourseComponent]
    });
    fixture = TestBed.createComponent(SingelCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
