import { h, Component } from 'preact';
import Loader from '../Loader';
import FourOhFour from '../FourOhFour'
// import styles from './style.css';

export default class Contact extends Component {
  render(){
    const { contacts, app } = this.props;
    const loaded = app.loaded;
    const contactId = this.props.params.contactId;
    const contact = contacts.filter(contact => contact.id == contactId)[0];

    // return component
    if(!loaded){
      return <Loader/>
    }
    if(loaded){
      if(!contact){
        return <FourOhFour/>
      }
      else {
        return <LoadedContact contact={ contact }/>
      }
    }
  }
}

const LoadedContact = ({contact}) => (
  <div className='type__color--white bold type__letter-spacing--1px padding--1em'>
    <h2>
      Name: { contact.name }
    </h2><br/>
    <h3>
      Email: { contact.email }
    </h3>
  </div>
)
