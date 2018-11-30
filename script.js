(function f(window, Handlebars) {
    let data = {
        people: [
            {
                name: 'Anatolii',
                surname: 'Melnychuk',
                age: 22
            },
            {
                name: 'Harri',
                surname: 'Potter',
                age: 43
            },
            {
                name: 'Tarash',
                surname: 'Litvin',
                age: 33
            }
        ]
    };
console.log('1');

    Handlebars.registerPartial('file', Handlebars.templates.file);
    console.log(2);
    let html = Handlebars.templates.content({ data });

    document.getElementById('main').innerHTML = html;

})(window, Handlebars);