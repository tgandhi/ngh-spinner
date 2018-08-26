# Angular - Loading Spinner
Package for Loading Spinner - angular Projects,This Library provides HTTP Interceptor, 
Its listen all the HTTP requests and show the Loading Info. You Can manullay load or hide the spinners also.
## Installation
```bash
$ npm install ngh-spinner --save
```
## Usage
This will Interceptor,So for triggering the Spinner please use `HttpClientModule`

Import `NghSpinnerModule`,`HttpClientModule` in app.module.ts:
```typescript
// Import library module
import { NghSpinnerModule } from 'ngh-spinner';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    // ...
    HttpClientModule,
    NghSpinnerModule
  ]
})
```
Add the service in the component you are going to use
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
## Customization
Propery | Uses |
--- | --- |
bgColor | Used to change the background color of overlay div, It uses rgba value, Default value is `rgba(0,0,0,0.5)` |
color | Any Hex Color value can be used, Default value is `#2598db` |
type | Spinner Type ,Bellow table updates all spinner type. Default value is `circle-clip` |

You can also manually show hide the loader using `show()` and `hide()` methodes in `NghSpinnerService`

## Type of Spinner Available
Spinner Type |
--- |
circle-clip |
square-spin |
## Building
```bash
    ng build --prod ngh-spinner
```    
## License
The MIT License (MIT)