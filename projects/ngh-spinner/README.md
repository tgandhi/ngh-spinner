# Angular - Loading Spinner
Package for Loading Spinner for angular Projects
## Installation
```bash
$ npm install ngx-spinner --save
```
## Usage

Import `NghSpinnerModule` in app.module.ts:
```typescript
// Import library module
import { NghSpinnerModule } from 'ngh-spinner';
@NgModule({
  imports: [
    // ...
    NgxSpinnerModule
  ]
})
```
Add the service in the component you are goin to use
```typescript
import { NghSpinnerService } from 'ngh-spinner';

export class AppComponent implements OnInit {
  constructor(private loader: NghSpinnerService) { }

  title = 'ngh-spinner-app'; 
  bgColor ='rgba(0,0,0,0.5)'; // overlay background color
  color ='#2598db'; // color of spinner
  type ='square-spin'; // type of spinner
  ngOnInit(){
    this.loader.show();
    setTimeout(() => {
      this.loader.hide();
    }, 5000);
  }

}

```
In Template Use the directive
```html
<ngh-spinner [bgColor]='bgColor'  [color]='color' [type]='type' ></ngh-spinner>
```
