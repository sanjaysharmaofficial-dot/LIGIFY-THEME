class LigifyTheme {
  constructor() {
    this.initStickyHeader();
    this.initCartDrawer();
  }

  initStickyHeader() {
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        header.classList.add('is-sticky');
      } else {
        header.classList.remove('is-sticky');
      }
    });
  }

  async updateCartCount() {
    const res = await fetch('/cart.js');
    const cart = await res.json();
    document.querySelectorAll('.cart-count').forEach(el => el.textContent = cart.item_count);
  }
}

new LigifyTheme();
