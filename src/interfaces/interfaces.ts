import { navOption } from './types'

export interface Props {
   window?: () => Window
   children: any
   items?: navOption[]
}

export const navOpts: navOption[] = [
   { name: 'Hem', path: '/' },
   { name: 'Våra tjänster', path: '/vara-tjanster' },
   { name: 'Om oss', path: '/om' },
   { name: 'Kundcase', path: '/case' },
   { name: 'Kontakt', path: '/kontakt' },
]
