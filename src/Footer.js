
const Footer = () => {
    const today = new Date();
  return (
    <footer>
        <p>Copyright &copy; {today.getFullYear()} Brent Harris</p>

    </footer>
  )
}

export default Footer;