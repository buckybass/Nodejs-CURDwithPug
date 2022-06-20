let html = ''
let index = 0
module.exports = (users) => {
  for (const user of users) {
    index++
    html += `<tr>
  <td>${user.name}</td>
  <td>${user.age}</td>
  <td><a href="/users/${index}">ดูข้อมูล
  <a href="/users/${index}/edit">แก้ไข</a></a><td>
  </tr>`
  }
  return html
}
