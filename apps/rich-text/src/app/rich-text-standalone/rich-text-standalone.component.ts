import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@Component({
  selector: 'ckeditor-test-rich-text-standalone',
  standalone: true,
  imports: [CommonModule, CKEditorModule],
  templateUrl: './rich-text-standalone.component.html',
  styleUrls: ['./rich-text-standalone.component.scss'],
})
export class RichTextStandaloneComponent {}
