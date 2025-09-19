import Link from "next/link";

import { nabla } from "@/styles/fonts";

const Welcome = () => {
    return (
        <>
            <div className="text-center">
                <h1 className={`${nabla.className} text-7xl`}>Hello there</h1>
                <p className="my-5">
                    Welcome to my project showcase! <br /> I exposed here every
                    funny projects I&apos;ve made.
                </p>
                <Link className="btn btn-warning" href="/showcase">
                    Get Started
                </Link>
            </div>
        </>
    );
};

export default Welcome;
