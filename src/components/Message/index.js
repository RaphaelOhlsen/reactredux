import React from 'react';
import './message.css';


// class Message extends Component {
//   render() {
//     return (
//     <p>{this.props.content}</p>
//     )
//   }
// }


// export default Message;

export default ({content}) => {
  return <p>{content}</p>
}