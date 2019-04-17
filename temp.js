const showTimeArray = [
    {
        name: 'Arclight',
        shwotime: ['5:00', 'https://somelink']
    },
    {
        name: 'BFE AMC',
        shwotime: ['5:00', 'https://somelink']
    },
    {
        name: 'Arclight',
        shwotime: ['5:00', 'https://somelink']
    },
    {
        name: "La Jolla",
        shwotime: ['5:00', 'https://somelink']
    },
    {
        name: 'Arclight',
        shwotime: ['5:00', 'https://somelink']
    },
    {
        name: 'BFE AMC',
        shwotime: ['5:00', 'https://somelink']
    }
]

let theaters = {};

showTimeArray.forEach(function(showTime) {
    if(typeof theaters[showTime.name] === 'undefined') {
        theaters[showTime.name] = [];
    }

    theaters[showTime.name].push(showTime);
});
console.log(theaters);
Object.keys(theaters);
