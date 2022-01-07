export const genres = {
    CLASSIC: "Классика",
    FANTASTIC: "Фантастика",
    DRAMA: "Драма",
    BIOGRAPHY: "Биография",
    GUIDE: "Обучающая лит-ра",
    COMICS: "Комиксы"
}

export const sortBy = {
    nothing: "NONE",
    writer: "BY_WRITER",
    title: "BY_TITLE"
}

export const userFormFields = [
    {
        title: "lastName",
        text: "Фамилия*"
    },
    {
        title: "firstName",
        text: "Имя*"
    },
    {
        title: "thirdName",
        text: "Отчество*"
    },
    {
        title: "birthday",
        text: "Дата рождения*"
    }
]

export const bookFormFields = [
    {
        title: "writer",
        text: "Автор (ФИО)*"
    },
    {
        title: "title",
        text: "Название*"
    },
    {
        title: "genre",
        text: "Жанр"
    },
    {
        title: "ageLimit",
        text: "Рекомендуемый возраст"
    },
    {
        title: "count",
        text: "Число экземпляров в библиотеке"
    }
]

export const filterBy = {
    title: "filterBy",
    text: "Фильтровать"
}

export const filterParams = {
    writer: "По автору",
    genre: "По жанру"
}

export const orderBy = {
    title: "orderBy",
    text: "Упорядочить"
}

export const orderParams = {
    title: "По названию",
    writer: "По фамилии автора"
}

export const mainPageTitles = [
    {
        title: "ЧИТАТЕЛИ",
        path: "/users"
    },
    {
        title: "КНИГИ",
        path: "/books"
    },
    {
        title: "Добавить читателя",
        path: "/user/create"
    },
    {
        title: "Добавить книгу",
        path: "/book/create"
    },
]