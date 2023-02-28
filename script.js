function addActiveClass(id) {
    const clickedElement = document.getElementById(id);

    const elements = document.getElementsByClassName('accordion');

    for (let i = 0; i < elements.length; i++) {
        if (elements[i] !== clickedElement) {
            let classNames = elements[i].classList.value;
            if (classNames.includes('active')) {
                elements[i].classList.remove('active');
            }
        }
        else {
            if (!clickedElement.classList.contains('active')) {
                clickedElement.classList.add('active');
            }
            else {
                clickedElement.classList.remove('active');
            }
        }
    }


}