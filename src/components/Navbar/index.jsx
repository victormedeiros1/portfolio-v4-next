import {
  NavbarStyles,
  NavLink,
  NavLinks,
  NavItem,
  NavLanguages,
  NavLanguage,
} from './styles';

import { useLanguage } from '../../context/Language';

import { useIntl } from 'react-intl';
import Image from 'next/image';
import Bars from '../Bars';

const Navbar = () => {
  const { setLanguage } = useLanguage();
  const intl = useIntl();

  return (
    <NavbarStyles>
      <NavLanguages>
        <NavLanguage>
          <button onClick={() => setLanguage('pt-BR')}>
            <Image
              width="30"
              height="20"
              src="/images/languages/br.svg"
              alt="Brazil flag"
            />
          </button>
        </NavLanguage>

        <NavLanguage>
          <button onClick={() => setLanguage('en-US')}>
            <Image
              width="30"
              height="20"
              src="/images/languages/usa.svg"
              alt="United States flag"
            />
          </button>
        </NavLanguage>
      </NavLanguages>
      <NavLinks>
        <Bars align="end" />
        <NavItem>
          <NavLink href="#about">{intl.formatMessage({ id: 'navbar_about_me' })}</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#works">{intl.formatMessage({ id: 'navbar_works' })}</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">{intl.formatMessage({ id: 'navbar_theme' })}</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#skills">{intl.formatMessage({ id: 'navbar_skills' })}</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#contact">
            {intl.formatMessage({ id: 'navbar_contact' })}
          </NavLink>
        </NavItem>
        <Bars direction="reverse" align="end" />
      </NavLinks>
    </NavbarStyles>
  );
};

export default Navbar;
