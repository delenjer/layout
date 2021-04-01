# Template layout

- Demo link: https://delenjer.github.io/layout/

**Example code button template**

```html
<button class="btn" type="button">Button</button>
```

```scss
.btn {
    display: block;
    color: #fff;
    border-radius: 5px;
    background-color: #0d6efd;
    border: 1px solid #0d6efd;
    padding: 0.5rem 1rem;
    cursor: pointer;
    outline: none;
    transition: all 0.3s;

    &:hover {
         color: #ccc;
     }

    &:focus {
         box-shadow: 0 0 1px 4px rgba(13,110,253,0.29);
     }
}
```
