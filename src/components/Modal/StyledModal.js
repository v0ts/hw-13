import styled from 'styled-components'

export const StyledModal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 3;

	& > div {
		background: white;
		padding: 25px;
		border-radius: 10px;
		width: 90%;
		max-width: 500px;

		& > div:first-child {
			display: flex;
			position: relative;
			align-items: center;
			margin-bottom: 20px;

			svg {
				font-size: 24px;
				cursor: pointer;
				position: absolute;
				right: 0;
				top: 0;
				color: #666;
				transition: all 200ms;

				&:hover {
					color: #333;
				}
			}

			h2 {
				margin-left: auto;
				margin-right: auto;
				font-size: 1.5rem;
			}
		}

		form {
			& > div {
				margin-bottom: 15px;

				label {
					display: block;
					margin-bottom: 5px;
					margin-left: 5px;
					font-weight: 500;
				}

				input,
				textarea {
					width: 90%;
					padding: 8px;
					border: 1px solid #a8a8a8;
					border-radius: 10px;
					font-size: 16px;
					transition: all 200ms;
				}

				input:hover,
				textarea:hover {
					border: 1px solid blue;
				}

				textarea {
					min-height: 100px;
					resize: none;
				}
			}

			button {
				display: flex;
				justify-content: center;
				background-color: blue;
				color: white;
				padding: 10px 15px;
				border: none;
				border-radius: 15px;
				cursor: pointer;
				font-size: 16px;
				width: 20%;

				&:hover {
					background-color: lightblue;
					color: black;
					transform: scale(1.1);
				}
			}
		}
	}
`
