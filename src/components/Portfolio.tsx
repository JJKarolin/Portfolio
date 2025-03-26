import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
const Portfolio = () => {
    return (
        <div>
            <h1>Welcome to My Portfolio</h1>
            <p>This is my awesome portfolio page.</p>
            <div className="min-h-screen bg-gray-100 text-gray-900 p-8">
      {/* Header */}
      <header className="text-center text-3xl font-bold mb-6">Your Name</header>
      <p className="text-center text-lg">Software Developer | C# | .NET | SQL | Full-Stack Enthusiast</p>
      
      {/* About Section */}
      <section className="mt-8 p-6 bg-white rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-2">About Me</h2>
        <p>
          I am a software developer with experience in C#, .NET, and SQL. Passionate about learning full-stack development and building efficient applications.
        </p>
      </section>
      
      {/* Skills Section */}
      <section className="mt-8 p-6 bg-white rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc pl-6">
          <li>C#, .NET,.NET Core, SQL</li>
          <li>React JS,JavaScript, HTML, CSS</li> 
        </ul>
      </section>
      
      {/* Projects Section */}
      <section className="mt-8 p-6 bg-white rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-2">Projects</h2>
        <p><strong>ERP Project in Windows Application</strong></p>
        <p>Developed an ERP system using C#, .NET, and SQL Server to streamline business operations, including BOM,Purchase,Machine Card Work,
        inventory management, sales, and finance modules.</p>
      </section>
      
      {/* Contact Section */}
      <section className="mt-8 p-6 bg-white rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-2">Contact</h2>
        <div className="flex space-x-4 mt-2">
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="mailto:your.email@example.com">
            <FaEnvelope size={30} />
          </a>
        </div>
        <div className="mt-4">
          <a href="/resume.pdf" download className="bg-blue-500 text-white px-4 py-2 rounded flex items-center w-max">
            <FaDownload className="mr-2" /> Download Resume
          </a>
        </div>
      </section>
    </div>
        </div>
    );
};

export default Portfolio;
