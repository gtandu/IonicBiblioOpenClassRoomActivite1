import { Media } from "./../models/Media";
import { Cd } from "./../models/Cd";
import { Book } from "./../models/Book";
export class MediasService {
  booksList: Book[] = [
    {
      name: "Death Note Tome 1",
      description: ["Genre : Mangas", "Type : Seinen"],
      isLend: false
    },
    {
      name: "One Piece Tome 1",
      description: ["Genre : Mangas", "Type : Shonen"],
      isLend: true
    }
  ];

  cdsList: Cd[] = [
    {
      name: "Tha Carter V",
      description: ["Artiste : Lil Wayne", "Genre : Rap", "Année : 2018"],
      isLend: true
    },
    {
      name: "Astroworld",
      description: ["Artiste : Travis Scott", "Genre : Rap", "Année : 2018"],
      isLend: false
    }
  ];

  onToggleMedia(media: Media) {
    media.isLend = !media.isLend;
  }
}
