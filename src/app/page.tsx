import Welcome from "@/components/welcome";
import ProfileCard from "@/components/profileCard";

export default function Home() {
    return (
        <>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-25 gap-10">
                <Welcome />
                <div className="divider lg:divider-horizontal"></div>
                <ProfileCard />
            </div>
        </>
    );
}
