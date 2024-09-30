let phoneBook = [
  ['Julie', '123456'],
  ['Mary', '654321'],
  ['John', '578961'],
  ['Peter', '746985']
]

for (let i = 0; i < phoneBook.length; i++) {
  process.stdout.write((i + 1).toString());
  for (let j = 0; j < phoneBook[i].length; j++) {
    process.stdout.write(' - ' + phoneBook[i][j])
  }
  process.stdout.write('\n')
}