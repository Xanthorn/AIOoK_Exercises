let date = new Date();

let day = date.getDate()
let month = date.getMonth() + 1;
let year = date.getFullYear();

function calculateDistance() {
    
}

export const Places = [
    {
        name: "Białystok",
        longtitude: 23,
        latitude: 53,
        distance: 0,
        dayOfArrive: `${day}.${month}.${year}`
    },
    {
        name: "Budapeszt",
        longtitude: 19,
        latitude: 47,
        distance: 0,
        dayOfArrive: `${day + 1}.${month}.${year}`
    },
    {
        name: "Sarajewo",
        longtitude: 18,
        latitude: 43,
        distance: 0,
        dayOfArrive: `${day + 2}.${month}.${year}`
    },
    {
        name: "Bukareszt",
        longtitude: 26,
        latitude: 44,
        distance: 0,
        dayOfArrive: `${day + 3}.${month}.${year}`
    },
    {
        name: "Kijów",
        longtitude: 30,
        latitude: 50,
        distance: 0,
        dayOfArrive: `${day + 4}.${month}.${year}`
    }
]



