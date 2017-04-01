import { h, Component, cloneElement  } from 'preact';
import { connect } from 'preact-redux';
import styles from './style.css';
import 'whatwg-fetch';

// components
import Header from './Header';
import Contact from './Contact';
import Contacts from './Contacts';

// redux utils
import { dispatchAsyncFetchContacts } from '../actions';

const url = 'https://jsonplaceholder.typicode.com/users';

// utils
const onlyChild = children => children && children[0] || children;

class AppComponent extends Component {
	componentDidMount(){
		console.log('component did mount. . .');
		this.props.handleFetchContacts(url)
	}
	render(){
		const { contacts } = this.props;
		return (
			<div className='container bg--chocolate'>
				<Header/>
				<div className={styles.content}>
					{ cloneElement(onlyChild(this.props.children), this.props) }
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleFetchContacts:(url) => {
			dispatch(dispatchAsyncFetchContacts(url));
		}
	}
}

const mapStateToProps = (state) => {
	return {
		contacts: state.contacts,
		app: state.app
	}
}

const App = connect(
	mapStateToProps,
	mapDispatchToProps
)(AppComponent);

export default App;
