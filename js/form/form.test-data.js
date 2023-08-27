class ExampleItem {
    constructor (name, phone, email, product){
        this.name = name
        this.phone = phone
        this.email = email
        this.product = product
    }
}

const testData = [
    new ExampleItem('Николай Иванов', parseInt('+79121452896'), 'ivanov@mail.com', 'course-js'),
    new ExampleItem('Ника Крылова', parseInt('+79128956485'), 'nika@gmail.com', 'course-js'),
    new ExampleItem('Сергей Ильин', parseInt('+79127896523'), 'ilins@yandex.com', 'course-vue'),
    new ExampleItem('Любовь Федорова', parseInt('+79122564598'), 'fedorova98@mail.com', 'course-wordpress'),
    new ExampleItem('Дмитрий Фролов', parseInt('+79123256891'), 'frolovdima12@gmail.com', 'course-php'),
    new ExampleItem('Инна Серова', parseInt('+79124568971'), 'serovainna@yandex.com', 'course-vue'),
    new ExampleItem('Борис Сенцов', parseInt('+79123562864'), 'sen23@mail.com', 'course-html'),
    new ExampleItem('Ольга Москвина', parseInt('+79125879361'), 'moskvina89@gmail.com', 'course-php'),
]

function getRandomIndex(max) {
    return Math.floor(Math.random() * max)
}

export default function getRandomData () {
    const index = getRandomIndex(testData.length)
    return testData[index]
}