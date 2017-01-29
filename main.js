var elements = document.body.querySelectorAll('span, a, p, h1, h2, h3, h4, h5, h6');

elements.forEach(function(element){

	element.innerHTML = element.innerHTML.replace(/will\ of\ the\ people/g, '<b style="color:red;text-transform:uppercase;font-weight:800;">tyranny of the masses</b>');

});
