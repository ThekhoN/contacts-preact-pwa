import { h, Component } from 'preact';
import { Link } from 'react-router';
import Loader from '../Loader';
import styles from './style.css';

export default class Contacts extends Component {
  render(){
    const { contacts, app } = this.props;
    const loaded = app.loaded;
    return (
      <div >
        { loaded ? <LoadedContacts contacts={ contacts }/> : <Loader/> }
      </div>
    )
  }
}

const LoadedContacts = ({contacts}) => {
  if(contacts){
    return (<ul className={styles.ul}>
      {
        contacts.map(contact => (<li className={styles.li} key={contact.id}>
          <Link
          className={styles.link}
          to={`/contact/${contact.id}`}>{contact.name}</Link>
      </li>))
      }
  </ul>)
  }
  else {
    return null;
  }
}
