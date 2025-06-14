import { Component } from 'react'
import { Modal } from './components/Modal/Modal'
import './App.css'

export class App extends Component {
	state = {
		isOpened: false,
		comments: 0,
		formData: {
			name: '',
			email: '',
			comment: '',
		},
	}

	componentDidMount() {
		document.addEventListener('keydown', this.keyDown)
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.keyDown)
	}

	keyDown = e => {
		if (e.key === 'Escape' && this.state.isOpened) {
			this.closeModal()
		}
	}

	inputChange = e => {
		const { name, value } = e.target

		this.setState(prevState => ({
			formData: {
				...prevState.formData,
				[name]: value,
			},
		}))
	}

	submit = e => {
		e.preventDefault()

		this.setState(prevState => ({
			comments: prevState.comments + 1,
			isOpened: false,
			formData: {
				name: '',
				email: '',
				comment: '',
			},
		}))
	}

	openModal = () => {
		this.setState({ isOpened: true })
	}

	closeModal = () => {
		this.setState({ isOpened: false })
	}

	render() {
		const { formData } = this.state

		return (
			<div className='App'>
				<button type='button' onClick={this.openModal}>
					Submit comment
				</button>
				{this.state.isOpened && (
					<Modal
						onClose={this.closeModal}
						onSubmit={this.submit}
						formData={formData}
						onChange={this.inputChange}
					/>
				)}
			</div>
		)
	}
}
