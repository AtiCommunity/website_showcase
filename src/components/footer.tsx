import EasterEgg from "@/components/footer/easterEgg";
import Copyright from "@/components/footer/copyright";

const Footer = () => {
    return (
        <>
            <footer className="flex flex-col items-center py-10 bg-base-200 text-center">
                <EasterEgg />
                <Copyright />
            </footer>
        </>
    );
};

export default Footer;
