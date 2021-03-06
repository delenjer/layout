export const htmlBtn = `<button class="btn" type="button">Button</button>`;

export const styleBtnPrimary = `
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
`;

export const htmlBtnGroup = `
<div class="btn-group-wrap">
  <button class="btn btn-lg" type="button">Button</button>
  <button class="btn btn-lg" type="button">Button</button>
</div>
`;

export const styleBtnLg = `
.btn-lg {
  width: 100%;
  padding: 1rem;
  font-size: 2rem;

  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }
}
`;
