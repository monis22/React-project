function Footer(){
    const date=new Date();
   const currentDate=date.getFullYear();
    return (
        <footer>
    <p>CopyRight {currentDate}</p>
    </footer>
    )
}

export default Footer;