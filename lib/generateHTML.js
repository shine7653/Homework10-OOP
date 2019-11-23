
function generateHTML(data) {
  /* return is a value */
  return `
                <div class="card" style="width: 18rem;">
                  <div class="card-header">
                     <h4>${data.name}</h4> 
                     <h4>${data.role}</h4> 
                  </div>
  
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${data.id} </li>
                    <li class="list-group-item">Email: ${data.email}</li>
                    <li class="list-group-item">Office number: ${data.officeNumber}</li>
                  </ul>
              </div>
      `;
}

module.exports = generateHTML;
