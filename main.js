var elements = document.body.querySelectorAll('*');

elements.forEach(function(element){

	element.innerHTML = element.innerHTML.replace(/will\ of\ the\ people/g, '<b style="color:red;text-transform:uppercase;font-weight:800;">tyranny of the masses</b>');

});
