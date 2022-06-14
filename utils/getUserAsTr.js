let html = ''
module.exports = (users) => {
  for (const user of users) {
    html += `<tr>
  <td>${user.name}</td>
  <td>${user.age}</td>
  </tr>`
  }
  return html
}
