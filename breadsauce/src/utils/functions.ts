function CreateIdTag(name: string): string {
    return (name.toLowerCase().replace(/[ \.\\]/g, '-'))
}
export {
    CreateIdTag
}