export function renderWithTemplate(template,parentElement,data,callback) 
{
  parentElement.insertAdjacentHTML('afterbegin', template)
  // if clear is true we need to clear out the contents of the parent.
  if (callback) {
    callback(data);
  }
}

async function loadTemplate(path) {
    const res = await fetch(path);
    const template = await res.text();
    return template;
  }  

export async function loadHeaderFooter() {
    const headerTemplate = await loadTemplate('../partials/header.html');
    const headerElement = document.querySelector('#main-header');
    const footerTemplate = await loadTemplate('../partials/footer.html');
    const footerElement = document.querySelector('#main-footer');
  
    renderWithTemplate(headerTemplate, headerElement);
    renderWithTemplate(footerTemplate, footerElement);
  }