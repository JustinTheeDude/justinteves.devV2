import { NextPage } from 'next'
import { Navbar } from './navbar/navbar';

type ContainerProps = {
	children: Object
}

export const Layout: NextPage<ContainerProps> = ({ children }: ContainerProps) => {
	return (
		<>
			<Navbar />
			<main>{ children }</main>
		</>
	)
}
