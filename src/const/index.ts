type NavbarDropdownType = {
	id: string,
	label: string,
	url: string
}
type NavbarItemType = {
	id: string,
	label: string,
	url: string,
	listDropdown: NavbarDropdownType[]
}
export const navbarItems: NavbarItemType[] = [
	{
		id: 'home',
		label: 'Home',
		url: '/',
		listDropdown: []
	},
	{
		id: 'game-show',
		label: 'Game Show',
		url: '/',
		listDropdown: []
	},
	{
		id: 'new-trending',
		label: 'New & trending',
		url: '/',
		listDropdown: [
			{
				id: 'videos',
				label: 'Videos',
				url: '/videos'
			}
		]
	},
	{
		id: 'about',
		label: 'About',
		url: '/about',
		listDropdown: []
	},
]