
function generateHTML(data) {
  /* return is a value */
  return `
  <!DOCTYPE html>
  <html lang="en">
     <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
        <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
        <title>Document</title>
        <style>
  
           
        </style>
        
      <body>
  
      <div class="wrapper">
  
  
          <div class="teamInformation">
                  <h4 class="header">Team</h4>
  
                  <div class= "teamUl">
                      <ul id="teamView">
                          <li class= "teamLi"></li>
                      </ul>
                  </div>
              </div> 
  
  
  <!--         <div class="header">
              <h2>My Team</h2>  -->           
              
                <!-- <ul class="links-nav">
                    <li class="nav-link">.</li>
                    <li class="nav-link"><a href="${data.html_url}">.</a></li>
                    <li class="nav-link"><a href="${data.blog}">.</a></li>
                </ul> -->              
         <!--  </div>
  
          <div class="main">
   -->
  
  
  
              <!-- <div class="card" style="width: 18rem;">
                  <div class="card-header">
                     <h4>${manager.name}</h4> 
                     <h4>${manager.role}</h4> 
                  </div>
  
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.id} </li>
                    <li class="list-group-item">Email: ${manager.email}</li>
                    <li class="list-group-item">Office number: ${manager.officeNumber}</li>
                  </ul>
              </div> -->
  
           <!-- </div> -->
        
      </div> 
  
      </body>
  </html>
      `;
}

module.exports = generateHTML;
