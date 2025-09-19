import Title from "@/components/navbar/title";
import ThemeManager from "@/components/navbar/themeManager";

const NavBar = () => {
    return (
        <>
            <div className="navbar z-50 top-0 sticky bg-base-200 flex justify-around">
                <Title />
                <ThemeManager />
            </div>
        </>
    );
};

export default NavBar;
