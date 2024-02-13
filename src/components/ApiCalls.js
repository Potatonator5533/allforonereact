const SayHello = async (sayHelloName) => {
    const promise = await fetch(`https://rosalesjallforone.azurewebsites.net/SayHello/Name/${sayHelloName}`);
    const data = await promise.text();
    return data;
}

const Add = async (addNum1, addNum2) => {
    const promise = await fetch(`https://rosalesjallforone.azurewebsites.net/AddNumbers/AddNumbers/${addNum1}/${addNum2}`);
    const data = await promise.text();
    return data;
}

const AskQ = async (askQName, askQTime) => {
    const promise = await fetch(`https://rosalesjallforone.azurewebsites.net/Sentence/AboutYou/${askQName}/${askQTime}`);
    const data = await promise.text();
    return data;
}

const Compare = async (compareNum1, compareNum2) => {
    const promise = await fetch(`https://rosalesjallforone.azurewebsites.net/Comparing/CompareNums/${compareNum1}/${compareNum2}`);
    const data = await promise.text();
    return data;
}

const Story = async (i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) => {
    const promise = await fetch(`https://rosalesjallforone.azurewebsites.net/Madlib/LibGenerator/${i1}/${i2}/${i3}/${i4}/${i5}/${i6}/${i7}/${i8}/${i9}/${i10}`);
    const data = await promise.text();
    return data;
}

const OddOrEven = async (oddOrEvenNum) => {
    const promise = await fetch(`https://rosalesjallforone.azurewebsites.net/OddOrEven/NumberType/${oddOrEvenNum}`);
    const data = await promise.text();
    return data;
}

const AlphaNumeric = async (alphaNumericInput) => {
    const promise = await fetch(`https://rosalesjallforone.azurewebsites.net/ReverseIt_Alphanumeric/ReverseChars/${alphaNumericInput}`);
    const data = await promise.text();
    return data;
}

const NumbersOnly = async (numbersOnlyNum) => {
    const promise = await fetch(`https://rosalesjallforone.azurewebsites.net/ReverseIt_NumbersOnly/ReverseNums/${numbersOnlyNum}`);
    const data = await promise.text();
    return data;
}

const Question = async (questionInput) => {
    const promise = await fetch(`https://rosalesjallforone.azurewebsites.net/Magic8Ball/RandAns/${questionInput}`);
    const data = await promise.text();
    return data;
}

const PickRestaurant = async (pickRestaurantInput) => {
    const promise = await fetch(`https://rosalesjallforone.azurewebsites.net/RestaurantPicker/PickRestaurant/${pickRestaurantInput}`);
    const data = await promise.text();
    return data;
}

export { SayHello, Add, AskQ, Compare, Story, OddOrEven, AlphaNumeric, NumbersOnly, Question, PickRestaurant }