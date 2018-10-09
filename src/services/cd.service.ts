import { Cd } from './../models/Cd';
export class CdsService{

    cdsList: Cd[] = [
        {
            name : 'Tha Carter V',
            description : [
                'Artiste : Lil Wayne',
                'Genre : Rap',
                'Année : 2018'
            ],
            isLend : true
        },
        {
            name : 'Astroworld',
            description : [
                'Artiste : Travis Scott',
                'Genre : Rap',
                'Année : 2018'
            ],
            isLend : false
        }
    ]
}