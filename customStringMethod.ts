export {}

declare global {
    interface String {
        toCamelCase(): string
        toSentence(): string
    }
}

String.prototype.toCamelCase = function () {
    const words = this.split(' ');
    const firstWord = words[0].toLowerCase()
    const camelCasedWords = words.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
    return firstWord + camelCasedWords
}

String.prototype.toSentence = function () {
    const firstLetter = this.charAt(0).toUpperCase();
    const restOfString = this.slice(1)

    return firstLetter + restOfString
}