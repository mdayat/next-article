interface NavbarBrandProps {
  children?: React.ReactNode;
  className?: string;
}

const NavbarBrand = ({ children, className = "" }: NavbarBrandProps) => {
  console.log("Render Brand");
  return <h1 className={className}>{children}</h1>;
};

export { NavbarBrand };
