class Star {
  constructor() {
    const size = Math.floor(Math.random() * 2) + 1;
    this.star = document.createElement('div');
    this.star.style.width = `${size}px`;
    this.star.style.height = `${size}px`;
    this.star.classList.add('scaling-star');
    this.star.style.top = `${Math.random() * 100}%`;
    this.star.style.left = `${Math.random() * 100}%`;
    this.star.style.animationDuration = `${Math.random() * 3 + 1}s`;
    document.body.appendChild(this.star);
  }
}
export default Star;
