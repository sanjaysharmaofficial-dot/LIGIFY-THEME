class CollectionFilters extends HTMLElement {
  constructor() {
    super();
    this.filterForm = this.querySelector('form');
    this.filterForm.addEventListener('change', this.onFormChange.bind(this));
  }

  onFormChange(event) {
    const formData = new FormData(this.filterForm);
    const searchParams = new URLSearchParams(formData).toString();
    this.renderPage(searchParams);
  }

  async renderPage(searchParams) {
    const url = `${window.location.pathname}?${searchParams}`;
    
    // Smooth loading transition
    document.getElementById('ProductGridContainer').classList.add('opacity-50');
    
    const response = await fetch(url);
    const responseText = await response.text();
    const html = new DOMParser().parseFromString(responseText, 'text/html');
    
    // Update the grid and the URL
    document.getElementById('ProductGridContainer').innerHTML = html.getElementById('ProductGridContainer').innerHTML;
    document.getElementById('ProductGridContainer').classList.remove('opacity-50');
    
    window.history.pushState({ path: url }, '', url);
  }
}

customElements.define('collection-filters', CollectionFilters);
