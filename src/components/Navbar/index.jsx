import {
  LargeBar,
  MediumBar,
  SmallBar,
  NavbarStyles,
  NavLink,
  NavLinks,
  NavItem,
} from './styles';

import { useIntl } from 'react-intl';

const Navbar = () => {
  const intl = useIntl();
  return (
    <NavbarStyles>
      <NavLinks>
        <SmallBar />
        <MediumBar />
        <LargeBar />
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
        <LargeBar />
        <MediumBar />
        <SmallBar />
      </NavLinks>
    </NavbarStyles>
  );
};

export default Navbar;
