let usersList = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496'
            }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
        }
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618'
            }
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains'
        }
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
            street: 'Douglas Extension',
            suite: 'Suite 847',
            city: 'McKenziehaven',
            zipcode: '59590-4157',
            geo: {
                lat: '-68.6102',
                lng: '-47.0653'
            }
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
            name: 'Romaguera-Jacobson',
            catchPhrase: 'Face to face bifurcated interface',
            bs: 'e-enable strategic applications'
        }
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        address: {
            street: 'Hoeger Mall',
            suite: 'Apt. 692',
            city: 'South Elvis',
            zipcode: '53919-4257',
            geo: {
                lat: '29.4572',
                lng: '-164.2990'
            }
        },
        phone: '493-170-9623 x156',
        website: 'kale.biz',
        company: {
            name: 'Robel-Corkery',
            catchPhrase: 'Multi-tiered zero tolerance productivity',
            bs: 'transition cutting-edge web services'
        }
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        address: {
            street: 'Skiles Walks',
            suite: 'Suite 351',
            city: 'Roscoeview',
            zipcode: '33263',
            geo: {
                lat: '-31.8129',
                lng: '62.5342'
            }
        },
        phone: '(254)954-1289',
        website: 'demarco.info',
        company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems'
        }
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        address: {
            street: 'Norberto Crossing',
            suite: 'Apt. 950',
            city: 'South Christy',
            zipcode: '23505-1337',
            geo: {
                lat: '-71.4197',
                lng: '71.7478'
            }
        },
        phone: '1-477-935-8478 x6430',
        website: 'ola.org',
        company: {
            name: 'Considine-Lockman',
            catchPhrase: 'Synchronised bottom-line interface',
            bs: 'e-enable innovative applications'
        }
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        address: {
            street: 'Rex Trail',
            suite: 'Suite 280',
            city: 'Howemouth',
            zipcode: '58804-1099',
            geo: {
                lat: '24.8918',
                lng: '21.8984'
            }
        },
        phone: '210.067.6132',
        website: 'elvis.io',
        company: {
            name: 'Johns Group',
            catchPhrase: 'Configurable multimedia task-force',
            bs: 'generate enterprise e-tailers'
        }
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        address: {
            street: 'Ellsworth Summit',
            suite: 'Suite 729',
            city: 'Aliyaview',
            zipcode: '45169',
            geo: {
                lat: '-14.3990',
                lng: '-120.7677'
            }
        },
        phone: '586.493.6943 x140',
        website: 'jacynthe.com',
        company: {
            name: 'Abernathy Group',
            catchPhrase: 'Implemented secondary concept',
            bs: 'e-enable extensible e-tailers'
        }
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        address: {
            street: 'Dayna Park',
            suite: 'Suite 449',
            city: 'Bartholomebury',
            zipcode: '76495-3109',
            geo: {
                lat: '24.6463',
                lng: '-168.8889'
            }
        },
        phone: '(775)976-6794 x41206',
        website: 'conrad.com',
        company: {
            name: 'Yost and Sons',
            catchPhrase: 'Switchable contextually-based project',
            bs: 'aggregate real-time technologies'
        }
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        address: {
            street: 'Kattie Turnpike',
            suite: 'Suite 198',
            city: 'Lebsackbury',
            zipcode: '31428-2261',
            geo: {
                lat: '-38.2386',
                lng: '57.2232'
            }
        },
        phone: '024-648-3804',
        website: 'ambrose.net',
        company: {
            name: 'Hoeger LLC',
            catchPhrase: 'Centralized empowering task-force',
            bs: 'target end-to-end models'
        }
    }
];
// Створити під кожен елемент окремий блок. В цьому блоці, під кожну властивість, та властивості внутрішніх об'єктів створити свої окремі блок.


for (let item of usersList){
   let div = document.createElement('div')
    div.innerText = `${item.name} `
    for (let item2 of item.address){
        let div2 = document.createElement('div')
        div.innerText = `${item2.street} `

    }

}
document.body.append(div)






// for (let item of usersList){
//    let wrapper =  document.createElement('div')
//     wrapper.classList.add('wrapperDiv')
//     let divName = document.createElement('div')
//     divName.innerText =`${item.name}`
//     let divUsername = document.createElement('div')
//     divUsername.innerText = `${item.username}`
//     let divEmail = document.createElement('div')
//     divEmail.innerText = `${item.email}`
//     let divAdress = document.createElement('div')
//
//     document.body.appendChild(wrapper)
//
//     wrapper.append(divName,divUsername,divEmail, divAdress)
//
//     divAdress.appendChild(divAdressValues)
//
//     for (let key in item){
//         let divAdressValues = document.createElement('div')
//         let divStreet = document.createElement('div')
//         divStreet.innerText = `${item.street}`
//         let divSuite = document.createElement('div')
//         divSuite.innerText = `${item2.suite}`
//         let divCity = document.createElement('div')
//         divCity.innerText = `${item2.city}`
//         let divZipcode = document.createElement('div')
//         divZipcode.innerText = `${item2.zipcode}`
//         divAdressValues.append(divStreet,divSuite,divCity,divZipcode)
//     }
//
//
//
// }























// for (let item of usersList){
//     let wrapper = document.createElement('div')
//     wrapper.classList.add('wrapper')
//     let userInfo = document.createElement('div')
//     userInfo.classList.add('userInfo')
//     let h3Name = document.createElement('h3')
//     h3Name.innerText = `Name of user - ${item.name}`
//     let h3Username = document.createElement('h3')
//     h3Username.innerHTML =`Nickname - ${item.username}`
//     let h3Email = document.createElement('h3')
//     h3Email.innerText = `email - ${item.email}`
//     let addressWrap = document.createElement('div')
//     addressWrap.classList.add('addressWrap')
//     let address = document.createElement('div')
//     address.classList.add('address')
//     address.innerText = `city - ${item.address.city} ${item.address.zipcode} street - ${item.address.street} № ${item.address.suite}`
//     let geoAddress = document.createElement('div')
//     geoAddress.classList.add('geo')
//     geoAddress.innerText = `geoInfo : ${item.address.geo.lat} and ${item.address.geo.lng}`
//     let contacts = document.createElement('div')
//     contacts.classList.add('contacts')
//     contacts.innerText = 'Contact info : '
//     let h4Phone = document.createElement('h4')
//     h4Phone.innerText = `phone - ${item.phone}`
//     let h4Website = document.createElement('h4')
//     h4Website.innerText = `email - ${item.website}`
//     let companyWrap = document.createElement('div')
//     companyWrap.classList.add('company')
//     companyWrap.innerText = 'About my company : '
//     let h4Name = document.createElement('h4')
//     h4Name.innerText = `name : ${item.company.name}`
//     let pPhrase = document.createElement('p')
//     pPhrase.innerText = `phrase : ${item.company.catchPhrase}`
//     let pBs = document.createElement('p')
//     pBs.innerText =`specialised on ${item.company.bs}`
//
//     document.body.appendChild(wrapper)
//     wrapper.append(userInfo , addressWrap, contacts , companyWrap)
//     userInfo.append(h3Name , h3Username, h3Email )
//     addressWrap.appendChild(address)
//     address.appendChild(geoAddress)
//     contacts.append(h4Phone, h4Website)
//     companyWrap.append(h4Name, pPhrase,pBs)
// }