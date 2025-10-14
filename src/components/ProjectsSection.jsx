import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "La Liga Match Predictor",
        description: "La liga match prediuctor made using(update when uploaded)",
        image: "/projects/LaLiga.png",
        tags: ["React", "SQL", "update"],
        // update to github and deployed app
        demoUrl: "#",
        githubUrl: "#",
    },

    {
        id: 2,
        title: "UEFA champions league fantasy",
        description: "UEFA champiuons league fantasy made using machine learning",
        image: "/projects/UEFA.png",
        tags: ["React", "SQL", "update"],
        // update to github and deployed app
        demoUrl: "#",
        githubUrl: "#",
    },

    {
        id: 3,
        title: "Exam scheduler",
        description: "Exam scheduler(update)",
        image: "/projects/Scheduler.png",
        tags: ["React", "SQL", "update"],
        // update to github and deployed app
        demoUrl: "#",
        githubUrl: "#",
    },

    {
        id: 4,
        title: "Calculator",
        description: "Caculator made using",
        image: "/projects/Calculator.png",
        tags: ["React", "SQL", "update"],
        // update to github and deployed app
        demoUrl: "#",
        githubUrl: "#",
    },

    {
        id: 5,
        title: "Placeholder",
        description: "Placeholder",
        image: "/projects/Placeholder.png",
        tags: ["React", "SQL", "update"],
        // update to github and deployed app
        demoUrl: "#",
        githubUrl: "#",
    },

    {
        id: 6,
        title: "Placeholder",
        description: "Placeholder",
        image: "/projects/Placeholder.png",
        tags: ["React", "SQL", "update"],
        // update to github and deployed app
        demoUrl: "#",
        githubUrl: "#",
    }
]

export const ProjectsSection = () => {
 return <section id = "projects" className="py-24 px-4 relative">
    <div className="conatiner mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {" "}
            Featured <span className="text-primary"> Projects </span>
        </h2>
        <p className="text-center text-foreground-muted mb-12 max-w-2xl mx-auto">
            Here are some of my projects. Each one was made with attention
            to detail, while learning new technologies and concepts for each one.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, key) => (
                <div 
                    key={key} 
                    className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                >
                    <div className="h-70 overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                    </div>

                    <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) => (
                                <span className="px-2 py-2 text-xs font-medium border rounded-full bg-primary/30 text-secondary-foreground">
                                    {tag}
                                </span>
                            ))}
                        </div>

                    <h3 className="text-xl font-semibold mb-1"> 
                        {project.title} 
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                        {project.description}
                    </p>
                    <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a 
                                    href={project.demoUrl} 
                                    target="_blank"
                                    className="text-freground/80 hover:text-primary transition-colors duration-300"
                                >
                                        <ExternalLink size={20}/>
                                </a>
                                <a 
                                    href={project.githubUrl}
                                    target="_blank"
                                    className="text-freground/80 hover:text-primary transition-colors duration-300"
                                >
                                    <Github size={20}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className="text-center mt-12">
            <a 
                className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                target="_blank"
                href="https://github.com/zakpatel">
                Check My Github <ArrowRight size={16} />
            </a>
        </div>
    </div>
 </section>;
};