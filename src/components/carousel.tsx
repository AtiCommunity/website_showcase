import Image from "next/image";
import Link from "next/link";

const Carousel = async () => {
    const getProjects = async () => {
        const res = await fetch("http://localhost:3000/api/");
        return res.json();
    };

    const data = await getProjects();

    return (
        <>
            <div className="carousel w-full gap-10">
                {data.projects.map((project: any, projectIndex: number) => (
                    <div className="carousel-item" key={projectIndex}>
                        <div className="card glass w-72 bg-secondary text-secondary-content">
                            <figure className="h-72">
                                <Image
                                    className="min-w-full"
                                    src={project.image}
                                    alt={project.image}
                                />
                            </figure>
                            <div className="card-body gap-5">
                                <h2 className="card-title">{project.name}</h2>
                                <p>{project.description}</p>
                                <div className="flex flex-wrap gap-2 justify-end">
                                    {project.badges.map(
                                        (badge: string, badgeIndex: number) => (
                                            <div
                                                className="badge badge-info"
                                                key={badgeIndex}
                                            >
                                                {badge}
                                            </div>
                                        )
                                    )}
                                </div>
                                {project.private ? (
                                    <div className="card-actions justify-center">
                                        <button className="btn btn-error">
                                            Private repository
                                        </button>
                                    </div>
                                ) : (
                                    <div className="card-actions justify-center">
                                        <Link
                                            href={project.link}
                                            target="_blank"
                                            className="btn btn-primary"
                                        >
                                            Github repository
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Carousel;
