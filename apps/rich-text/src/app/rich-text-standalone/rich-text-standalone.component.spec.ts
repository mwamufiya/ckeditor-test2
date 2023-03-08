import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RichTextStandaloneComponent } from './rich-text-standalone.component';

describe('RichTextStandaloneComponent', () => {
  let component: RichTextStandaloneComponent;
  let fixture: ComponentFixture<RichTextStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RichTextStandaloneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RichTextStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
