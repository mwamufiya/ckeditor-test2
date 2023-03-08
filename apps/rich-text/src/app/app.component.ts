import { Component } from '@angular/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@Component({
  selector: 'ckeditor-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rich-text';
}
