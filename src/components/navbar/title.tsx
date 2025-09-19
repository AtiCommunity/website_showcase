import Link from "next/link";

import { akronim } from "@/styles/fonts";

const Title = () => {
    return (
        <>
            <Link className={`${akronim.className} text-4xl`} href="/">
                AtiCommunity
            </Link>
        </>
    );
};

export default Title;
