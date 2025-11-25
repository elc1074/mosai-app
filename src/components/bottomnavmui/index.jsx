"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

// icons
import PaletteIcon from '@mui/icons-material/Palette';
import InfoIcon from '@mui/icons-material/Info'; // Novo ícone

export function BottomNavMui() {     
    const pathname = usePathname(); // determinar item ativo, ajuste conforme as rotas
    const isHome = pathname === '/'; // Considera '/' como rota ativa para home/obras

    const rota=useRouter();  // use router
    const isDetalhe=pathname.startsWith('/obras'); // se esta em detalhe

    const isAbout=pathname === '/sobre';

    const actvCor = '#ff5b04';
    const inativCor = '#bbb';

    function handleHomeClick(e){
        if(isDetalhe){
            e.preventDefault();
            rota.back();
        }
    }

    return (
        <nav className="bt-nav">
            <Link
                href="/"
                onClick={handleHomeClick} // interceptador
                className={`nav-item${isHome ? ' nav-item--active' : ''}`}
                aria-current={isHome ? 'page' : undefined}
                aria-label="Ir para home"
            >
                <PaletteIcon
                    className='icon'
                    style={{ color: isHome ? actvCor : inativCor }}
                />
            </Link>

            <Link
                href="/sobre"
                className={`nav-item${isAbout ? ' nav-item--active' : ''}`}
                aria-current={isAbout ? 'page' : undefined}
                aria-label="sobre o app"
            >
                <InfoIcon
                    className='icon'
                    style={{ color: isAbout ? actvCor : inativCor }}
                />
            </Link>

        </nav>
    );
}


//import { Collections } from '@mui/icons-material';
//import { Event } from '@mui/icons-material';


/*
<Link href="/profile" className={`bottom-nav__item ${active === 'profile' ? 'bottom-nav__item--active' : ''}`} aria-label="Perfil">
  <PersonIcon className="bottom-nav__icon" fontSize="medium" aria-hidden="true" />
  <span className="bottom-nav__label">perfil</span>
</Link>

*/
// "use client";

// import React from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { Collections } from '@mui/icons-material';
// import PaletteIcon from '@mui/icons-material/Palette';

// //import { Event } from '@mui/icons-material';
// //import styles from '@/app/styles/page.module.css';

// export function BottomNavMui(){
    
//     const pathname = usePathname();
//     // determinar item ativo, ajuste conforme as rotas
//     const active = pathname === '/profile' ? 'profile' : 'home';

//     return (
//         <nav className="bt-nav">
//             <Link
//                 href="/home"
//                 className={`nav-item ${active === 'home' ? 'nav-item--active' : ''}`}
//                 aria-current={active === 'home' ? 'page' : undefined}
//                 aria-label="Ir para home"
//             >
//                 <Collections className="icon" fontSize='medium' aria-hidden='true' />
//                 <span className='lbl-icon'>home</span>
//             </Link>
//         </nav>
//     );
// }
