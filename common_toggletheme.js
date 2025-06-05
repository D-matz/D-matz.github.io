function toggleTheme() {
	const current = document.documentElement.getAttribute('data-theme');
	const newTheme = current === 'dark' ? 'light' : 'dark';
	document.documentElement.setAttribute('data-theme', newTheme);
	localStorage.setItem('EatTheWorldTheme', newTheme);
}