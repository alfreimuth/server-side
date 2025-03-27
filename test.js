

const names = [
    'Reed', 'Servando', 'Sam', 'Jay', 'Katy', 'Edison'
]

const getRandomStudent = () => {
    const index = Math.floor(Math.random() * names.length)
    return names[index]
}

const getStudentByIndex = index => {
    return names[index]
}

const printRandomStudent = () => {
    console.log(getRandomStudent())
}

module.exports = { getRandomStudent, getStudentByIndex, printRandomStudent }