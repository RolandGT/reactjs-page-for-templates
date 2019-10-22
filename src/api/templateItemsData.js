import subcatData from '../api/subcategoriesData';
import catData from '../api/categoriesData';
const cat = catData;
const subs = subcatData;
const templateItemsData = [
    {   
        id:1, 
        header : 'MUST HAVE BRAINSTORM CARDS', 
        body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. '+
        ' Ut wisi enim ad minim veniam, quis trud',
        categorie: cat[0].name,
        subcategories: [subs[1],subs[2],subs[3]],
        pages:4
    },
    {   
        id:2, 
        header : 'THE BEST BRAINSTORM CARDS', 
        body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        categorie: cat[0].name,
        subcategories: [subs[1],subs[2],subs[3],subs[14]],
        pages:5
    },
    {   
        id:3, 
        header : 'SUPER CARDS', 
        body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        categorie: cat[0].name,
        subcategories: [subs[1],subs[2],subs[14]],
        pages:2
    },
    {   
        id:4, 
        header : 'GENERATE IDEAS WITHCARDS', 
        body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        categorie: cat[0].name,
        subcategories: [subs[1],subs[3]],
        pages:7
    },
    {   
        id:5, 
        header : 'CREATIVE CARDS', 
        body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        categorie: cat[0].name,
        subcategories: [subs[1],subs[5],subs[3],subs[14]],
        pages:3
    },
    {   
        id:6, 
        header : 'CARDS FOR WORKSHOPS', 
        body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        categorie: cat[0].name,
        subcategories: [subs[1],subs[2],subs[14]],
        pages:4
    },
    {   
        id:7, 
        header : 'Best Bussiness Cards1', 
        body: 'Categorie 2.',
        categorie: cat[1].name,
        subcategories: [subs[1],subs[2],subs[14]],
        pages:4
    },
    {   
        id:8, 
        header : 'Best Bussiness Cards 2', 
        body: 'Categorie 2.',
        categorie: cat[1].name,
        subcategories: [subs[1],subs[9],subs[10]],
        pages:4
    },
    {   
        id:9, 
        header : 'Best Bussiness Cards 3', 
        body: 'Categorie 2.',
        categorie: cat[1].name,
        subcategories: [subs[1],subs[11],subs[15]],
        pages:4
    },
    {   
        id:10, 
        header : 'Bussiness Plan 1', 
        body: 'Categorie 3.',
        categorie: cat[2].name,
        subcategories: [subs[1],subs[12],subs[15]],
        pages:4
    },
    {   
        id:11, 
        header : 'Bussiness Plan 2', 
        body: 'Categorie 3.',
        categorie: cat[2].name,
        subcategories: [subs[1],subs[7]],
        pages:4
    },
];
export default templateItemsData;