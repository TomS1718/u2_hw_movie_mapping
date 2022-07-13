const Genre = (props) => {
let myColorVariable;
switch(props.genre) {
  case 'Action': 
    myColorVariable = 'orange';
    break
  
  case 'Crime':
    myColorVariable = 'red';
    break;
  
  case 'Thriller':
    myColorVariable = 'yellow';
    break;

  case 'Fantasy':
    myColorVariable = 'pink';
    break;

  case 'Adventure':
    myColorVariable = 'brown';
    break;

  case 'Science Fiction':
    myColorVariable = 'purple';
    break;
  
  case 'Horror':
    myColorVariable = 'darkred';
    break;

  case 'Animation':
    myColorVariable = 'green';
    break;

  case 'Comedy':
    myColorVariable = 'lightgreen';
    break;
  
  case 'Family':
    myColorVariable = 'teal';
    break;

  case 'Music':
    myColorVariable = 'wheat';
    break;
  
  case 'Mystery':
    myColorVariable = 'aqua';
    break;
  
  case 'History':
    myColorVariable = 'bronze';
    break;
    
  case 'Drama':
    myColorVariable = 'gray';
    break;

  case 'Romance':
    myColorVariable = 'orchid';
    break;

  default:
    myColorVariable = 'white';
}

return (
  <div>
    <p style={{ backgroundColor: myColorVariable, color: 'rgb(255,255,255)' }} >{props.genre}
    </p>
  </div>
)
}

export default Genre;