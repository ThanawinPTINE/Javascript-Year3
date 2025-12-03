const fullName = " Thanawin  Phetthae ";
console.log(fullName)
const cleanedName = fullName.trim();
console.log(cleanedName)
const namePart = cleanedName.split(' ');
console.log(namePart)
const finalPart = namePart.filter(Boolean);
console.log(finalPart)
const FirstName = finalPart[0];
const LastName = finalPart[1];
console.log(`Hello, ${FirstName} ${LastName}`)