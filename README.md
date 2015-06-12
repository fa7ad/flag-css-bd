# flag-css-bd
Bangladeshi Flag Using CSS 

## Clone and open the html page for a preview

## To use in a project
* Clone the repo
* Import the mixin (`flag.scss`)
* Create your markup
```html
<div id="flag_element">
  <div class="base">
    <div class="circle"></div>  
  </div>
</div>
```
* `@include` the mixin in your main sass file
```scss
#flag_element{
 @include flag(400px /* Width for your flag */); 
}
```
