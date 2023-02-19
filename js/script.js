// blog html file added
document.getElementById('blog-page').addEventListener('click', function () {
    window.location.href = 'blog.html';
  });

// card random color added
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseover', function() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    card.style.backgroundColor = '#' + randomColor;
  });

  card.addEventListener('mouseout', function() {
    card.style.backgroundColor = 'white';
  });

});


  // for first card
  document.getElementById('first-card').addEventListener('click', function () {
  
    const cardName = document.getElementById('triangle').innerText;
    const triangleFieldNumber = document.getElementById('triangle-field-number').innerText;
    const triangleFieldFirst = document.getElementById('triangle-field-b').value;
    const triangleFieldSecond = document.getElementById('triangle-field-h').value;
  
    if (isNaN(parseFloat(triangleFieldNumber)) || isNaN(parseFloat(triangleFieldFirst)) || isNaN(parseFloat(triangleFieldSecond))) {
        alert('Please enter a valid number...');
        return;
    }
  
    const totalResult = parseFloat(triangleFieldNumber) * parseFloat(triangleFieldFirst) * parseFloat(triangleFieldSecond);
  
    disPlayData(cardName, totalResult);
  });
  
  
  // for second card
  document.getElementById('second-card').addEventListener('click', function () {
  
    const cardName = document.getElementById('rectangle').innerText;
    const rectangleFieldFirst = document.getElementById('rectangle-field-w').value;
    const rectangleFieldSecond = document.getElementById('rectangle-field-l').value;
  
    if (isNaN(parseFloat(rectangleFieldFirst)) || isNaN(parseFloat(rectangleFieldSecond))) {
        alert('Please enter a valid number...');
        return;
    }
  
    const totalResult = parseFloat(rectangleFieldFirst) * parseFloat(rectangleFieldSecond);
  
    disPlayData(cardName, totalResult);
  });
  
  
  // for third card
  document.getElementById('third-card').addEventListener('click', function () {
  
    const cardName = document.getElementById('parallelogram').innerText;
    const parallelogramFieldFirst = document.getElementById('parallelogram-b').innerText;
    const parallelogramFieldSecond = document.getElementById('parallelogram-h').innerText;
    const totalResult = parseInt(parallelogramFieldFirst) * parseInt(parallelogramFieldSecond);
  
    disPlayData(cardName, totalResult);
  
  });
  
  
  // for fourth card
  document.getElementById('fourth-card').addEventListener('click', function () {
  
    const cardName = document.getElementById('rhombus').innerText;
    const rhombusFieldNumber = document.getElementById('rhombus-field-number').innerText;
    const parallelogramFirst = document.getElementById('rhombus-field-d1').innerText;
    const parallelogramSecond = document.getElementById('rhombus-field-d2').innerText;
    const totalResult = parseFloat(rhombusFieldNumber) * parseInt(parallelogramFirst) * parseInt(parallelogramSecond);
  
    disPlayData(cardName, totalResult);
  
  });
  
  
  // for fifth card
  document.getElementById('fifth-card').addEventListener('click', function () {
  
    const cardName = document.getElementById('pentagon').innerText;
    const pentagonFieldNumber = document.getElementById('pentagon-field-number').innerText;
    const pentagonFieldFirst = document.getElementById('pentagon-p').innerText;
    const pentagonFieldSecond = document.getElementById('pentagon-b').innerText;
    const totalResult = parseFloat(pentagonFieldNumber) * parseInt(pentagonFieldFirst) * parseInt(pentagonFieldSecond);
  
    disPlayData(cardName, totalResult);
  
  });
  
  
  // for sixth card
  document.getElementById('sixth-card').addEventListener('click', function () {
  
    const cardName = document.getElementById('ellipse').innerText;
    const ellipseFieldNumber = Math.PI.toFixed(2);
    const ellipseFieldFirst = document.getElementById('ellipse-a').innerText;
    const ellipseFieldSecond = document.getElementById('ellipse-b').innerText;
    const totalResult = (parseFloat(ellipseFieldNumber) * parseInt(ellipseFieldFirst) * parseInt(ellipseFieldSecond)).toFixed(2);
  
    disPlayData(cardName, totalResult);
  
  });
  
  let count = 1;
  
  /* ------------------------------------------------------------------------- */
  
  function disPlayData(cardName, totalResult) {
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${count}</td>
    <td>${cardName}</td>
    <td>${totalResult}cm<sup>2</sup></td>
    <td><button class= 'btn btn-success'>Convert to m<sup>2</sup></button></td>
    `;
    count++;
    container.appendChild(tr);
  }