// Set theme immediately - before any CSS loads
const theme = localStorage.getItem('EatTheWorldTheme') || 
			 (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
document.documentElement.setAttribute('data-theme', theme);