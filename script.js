(function f(window, Handlebars) {
    let data = [
            {
                name: 'Anatolii',
                surname: 'Melnychuk',
                age: 22
            },
            {
                name: 'Harry',
                surname: 'Potter',
                age: 43
            },
            {
                name: 'Tarash',
                surname: 'Litvin',
                age: 33
            }
        ];

    Handlebars.registerPartial('file', Handlebars.templates['file.hbs']);

    let html = Handlebars.templates['content.hbs']({ person: data});

    document.getElementById('main').innerHTML = html;

})(window, Handlebars);