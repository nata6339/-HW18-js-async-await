console.log('=========================== #3')

function delay(data, ms) {
    return new Promise(function (resolve){
        setTimeout(() => {
            resolve(data)
        }, ms);
    })
}

delay({name: "user"}, 1000).then((data) => console.log("Hello!", data.name));

console.log('=========================== #4')

async function getUserInfo() {
    return { name: 'Vic', age: 21, id: 1 };
}

async function getUserAvatar(userInfo) {
    userInfo.avatar = 'https://previews.123rf.com/images/stockgiu/stockgiu1708/stockgiu170802061/83728179-avatar-sketch-of-a-funny-man-s-haed-with-sunglasses-and-hairstyle-design.jpg'
    return userInfo;
}

async function getUserAdditionalInfo(userInfo) {
    userInfo.interests = ['sport', 'books'];
    return userInfo;
}

async function getResult() {
    let info = await delay(getUserInfo(), 1000);
    let avatar = await delay(getUserAvatar(info), 1000);
    let addInfo = await delay(getUserAdditionalInfo(avatar), 1000);
    console.log(addInfo);
}

getResult();

console.log('=========================== #5')

async function getUser() {
    return { name: 'Vic', age: 21, id: 1 };
}

async function getInfo() {
    let user = await getUser();
    throw new Error('error');
}

getInfo().catch(console.log);


