import {
  LargeBar,
  MediumBar,
  SmallBar,
  NavbarStyles,
  NavLink,
  NavLinks,
  NavItem,
} from './styles';

const Navbar = () => {
  return (
    <NavbarStyles>
      <NavLinks>
        <SmallBar />
        <MediumBar />
        <LargeBar />
        <NavItem>
          <NavLink href="#about">ABOUT ME</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#works">WORKS</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">THEME</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#skills">SKILLS</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#contact">CONTACT</NavLink>
        </NavItem>
        <LargeBar />
        <MediumBar />
        <SmallBar />
      </NavLinks>
    </NavbarStyles>
  );
};

export default Navbar;
