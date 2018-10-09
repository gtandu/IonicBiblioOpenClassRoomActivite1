import { Book } from './../models/Book';
export class BooksService{

    booksList: Book[] = [
        {
            name: 'Death Note Tome 1',
            description : [
                'Genre : Mangas',
                'Type : Seinen'
            ],
            isLend: false
        },
        {
            name: 'One Piece Tome 1',
            description : [
                'Genre : Mangas',
                'Type : Shonen'
            ],
            isLend: true
        }
    ]
}