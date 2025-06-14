import { Component } from 'react'
import { StyledModal } from './StyledModal'
import { IoCloseOutline } from 'react-icons/io5'

export class Modal extends Component {
	handleClick = e => {
		if (e.target === e.currentTarget) {
			this.props.onClose()
		}
	}

	render() {
		return (
			<StyledModal onClick={this.handleClick}>
				<div>
					<div>
						<h2>Your comment</h2>
						<IoCloseOutline onClick={this.props.onClose} />
					</div>
					<form>
						<div>
							<label htmlFor='name'>Name:</label>
							<input
								type='text'
								id='name'
								name='name'
								value={this.props.formData.name}
								onChange={this.props.onChange}
								required
							/>
						</div>
						<div>
							<label htmlFor='email'>E-mail:</label>
							<input
								type='email'
								id='email'
								name='email'
								value={this.props.formData.email}
								onChange={this.props.onChange}
								required
							/>
						</div>
						<div>
							<label htmlFor='comment'>Comment:</label>
							<textarea
								id='comment'
								name='comment'
								value={this.props.formData.comment}
								onChange={this.props.onChange}
								required
							/>
						</div>
						<button type='submit'>Send</button>
					</form>
				</div>
			</StyledModal>
		)
	}
}
