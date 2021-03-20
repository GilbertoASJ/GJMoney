import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	text-align: center;

	footer {
		margin-top: 1.25rem;
		color: var(--text-body);

		a {
			color: var(--blue-light);
			text-decoration: none;

			&:hover {
				color: darkblue;
			}
		}
	}
`