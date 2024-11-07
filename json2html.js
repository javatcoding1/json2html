// json2html.js
export default function json2html(data) {
    // Start the HTML table with a custom data-user attribute
    let html = `<table data-user="jayanthmadhav1@gmail.com"><thead><tr><th>Name</th><th>Age</th><th>Gender</th></tr></thead><tbody>`;
  
    // Iterate over each object in the data array to add table rows
    data.forEach(item => {
      html += `<tr>
        <td>${item.Name || ''}</td>
        <td>${item.Age || ''}</td>
        <td>${item.Gender || ''}</td>
      </tr>`;
    });
  
    // Close the table tags
    html += `</tbody></table>`;
    
    return html;
  }