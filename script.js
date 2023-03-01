function addActiveClass(id) {
    const clickedElement = document.getElementById(id);
    const elements = document.getElementsByClassName('accordion');

    for (let i = 0; i < elements.length; i++) {
        if (elements[i] !== clickedElement) {
            let classNames = elements[i].classList.value;

            if (classNames.includes('active')) {
                elements[i].classList.remove('active');
            }

            let imgClassNames = elements[i].children[0].children[1].classList;

            if (imgClassNames.value.includes('rotate-image')) {
                imgClassNames.remove('rotate-image');
            }
        }
        else {
            if (!clickedElement.classList.contains('active')) {
                clickedElement.classList.add('active');
                clickedElement.children[0].children[1].classList.add('rotate-image');
            }
            else {
                clickedElement.classList.remove('active');
                clickedElement.children[0].children[1].classList.remove('rotate-image');
            }
        }
    }


}