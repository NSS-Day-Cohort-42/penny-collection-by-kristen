const pennyCollection = [
    {
        "description": "shark",
        "location": "Mystic Aquarium, CT",
        "yearObtained": 2009
    },
    {
        "description": "My Lucky Penny",
        "location": "Ireland",
        "yearObtained": 2019
    },
    {
        "description": "Winnie the Pooh",
        "location": "Disney World, FL",
        "yearObtained": 2003
    },
    {
        "description": "Hurricane Harbor",
        "location": "Six Flags, MA",
        "yearObtained": 2007
    },
    {
        "description": "Mammoth Cave",
        "location": "Mammoth Cave National Park, KY",
        "yearObtained": 2016
    },
    {
        "description": "koala bear",
        "location": "San Diego Zoo, CA",
        "yearObtained": 2015
    },
    {
        "description": "otter",
        "location": "Chattanooga Aquarium, TN",
        "yearObtained": 2018
    },
    {
        "description": "Waimea Valley",
        "location": "North Shore, HI",
        "yearObtained": 2017
    },
    {
        "description": "Country Music Hall of Fame",
        "location": "Nashville, TN",
        "yearObtained": 2009
    }
]

export const usePennies = () => pennyCollection.slice().sort((a,b) => b.yearObtained - a.yearObtained)

export const after2015Pennies = () => {
    // const recentPennies = []

    // for(const penny of pennyCollection){
    //     if(penny.yearObtained > 2015){
    //         recentPennies.push(penny)
    //     }
    // }

    const recentPennies = pennyCollection.filter(penny => penny.yearObtained > 2015)

    return recentPennies
}