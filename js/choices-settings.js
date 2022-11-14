const defaultSelect = () => {
    const elements = document.querySelectorAll('.default');
    elements.forEach(element => {
        const choices = new Choices(element, {
            searchEnabled: false,
            itemSelectText: '',
        });
    });
};

defaultSelect();