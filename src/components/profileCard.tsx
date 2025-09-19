import Image from "next/image";
import Link from "next/link";

import profilePic from "#/public/profile.jpg";

const ProfileCard = () => {
    return (
        <>
            <div className="card glass max-w-72 bg-blue-900 text-amber-400">
                <figure>
                    <Image src={profilePic} alt="profile" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Antoine (Atineon) ROBIN</h2>
                    <p>IT Engineer </p>
                    <div className="card-actions justify-center">
                        <Link
                            className="btn btn-warning"
                            href="https://antoinerobin.fr"
                            target="_blank"
                        >
                            More info
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileCard;
