import { Briefcase, Code, User } from "lucide-react";


export const AboutSection = () => {
    return <section id="about" className="py-24 px-24 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Passionate Programmer and Tech Enthusiast</h3>

                    <p className="text-muted-foreground ">
                        With some experience in web development and automation,
                        I specialize in creating well-designed, accesible, and 
                        result-showing applications.
                    </p>

                    <p className="text-muted-foreground">
                        I am very focused on creating elegant and sustainable 
                        solutions to complex problems. To do this more effectively 
                        I am learning new technolgoies everyday, and techniques to
                        always be up to the date with the changing landscape.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            Get In Touch
                        </a>
                        <a 
                            href="../public/Zakariah Patel_Resume.pdf" 
                            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primar/20 transition-colors duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {" "}
                            View My Resume
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Web Development</h4>
                                <p className="text-muted-foreground"> 
                                    Creation and deployment of responsive web applications with 
                                    modern framworks like React.js and Tailwind.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> User Experience</h4>
                                <p className="text-muted-foreground"> 
                                    Designing accesible and intuitive user interfaces for 
                                    seamless experiences.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Project Management</h4>
                                <p className="text-muted-foreground"> 
                                    Lead automation projects while collaboratively working 
                                    with respective departments to ensure full accesibility.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>;
};