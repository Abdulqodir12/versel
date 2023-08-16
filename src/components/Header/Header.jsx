import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    return (
        <header className='header bg-slate-700 text-white '>
            <div className='container'>
                <div className='header__inner'>
                    <div className='header__logo'>
                        <Link href='/' className='header__logo-link mt-5'>
                            <Image
                                src='/next.svg'
                                alt='logo'
                                width={100}
                                height={50}
                                className='header__logo-img'
                            />
                        </Link>
                    </div>
                    <nav className='header__nav'>
                        <ul className='header__list flex justify-between'>
                            <li className='header__item'>
                                <Link href='/' className='header__link'>
                                    Home
                                </Link>
                            </li>
                            <li className='header__item'>
                                <Link href='/blog' className='header__link'>
                                    Blog
                                </Link>
                            </li>
                            <li className='header__item'>
                                <Link href='/about' className='header__link'>
                                    About
                                </Link>
                            </li>
                            <li className='header__item'>
                                <Link href='/contact' className='header__link'>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
