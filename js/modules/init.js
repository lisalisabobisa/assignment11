// async function fetchUsers() {
//     try {
//         const response = await fetch('../data/employees.json');
//         const users = await response.json();
//         return users;
//     } catch (error) {
//         console.log(error.message);
//     }
// }
// fetchUsers()
//     .then((users) => {
//         document.body.innerHTML += 
//         `<p>
//         ${user.id}<br>
//         <strong>${user.name}</strong><br>
//         ${user.ext}
//         <a href="mailto:${user.email}">${user.email}</a><br>
//          ${user.department}<br>
//         </p>`;
//     })
//     .catch(e => console.log(e) )

const xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.open('GET', '../data/employees.json');
xhr.send();
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let employees = xhr.response;
        for (let employee of employees) {
            document.body.innerHTML += `
            ${employee.id}<br>
            ${employee.name}<br>
            ${employee.ext}
            ${employee.email}><br>
            ${employee.department}<br>`;
        }
    }
});
xhr.onerror = (e) => {console.error(e.message)};