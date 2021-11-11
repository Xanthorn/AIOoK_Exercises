let date = new Date();

let day = date.getDate()
let month = date.getMonth() + 1;
let year = date.getFullYear();

export const Places = [
    {
        name: "Białystok",
        x: 23,
        y: 53,
        distance: 0,
        dayOfArrive: `${day}.${month}.${year}`
    },
    {
        name: "Budapeszt",
        x: 19,
        y: 47,
        distance: 0,
        dayOfArrive: `${day + 1}.${month}.${year}`
    },
    {
        name: "Sarajewo",
        x: 18,
        y: 43,
        distance: 0,
        dayOfArrive: `${day + 2}.${month}.${year}`
    },
    {
        name: "Bukareszt",
        x: 27,
        y: 44,
        distance: 0,
        dayOfArrive: `${day + 3}.${month}.${year}`
    },
    {
        name: "Kijów",
        x: 30,
        y: 51,
        distance: 0,
        dayOfArrive: `${day + 4}.${month}.${year}`
    }
]



