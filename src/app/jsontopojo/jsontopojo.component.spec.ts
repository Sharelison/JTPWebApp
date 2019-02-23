import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsontopojoComponent } from './jsontopojo.component';

describe('JsontopojoComponent', () => {
  let component: JsontopojoComponent;
  let fixture: ComponentFixture<JsontopojoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsontopojoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsontopojoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
