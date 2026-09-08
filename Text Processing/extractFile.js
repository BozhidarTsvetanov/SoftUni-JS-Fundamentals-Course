function extractFile(input) {
    let path = input.split('\\')
    let lastPathName = path[path.length - 1]

    let lastDot = lastPathName.lastIndexOf('.');

    let name = lastPathName.substring(0, lastDot)
    let extention = lastPathName.substring(lastDot + 1) 
    console.log(`File name: ${name}`);
    console.log(`File extension: ${extention}`);
    
    
}
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs')
