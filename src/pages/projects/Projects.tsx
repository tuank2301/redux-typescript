import { projectsData } from 'data';
import { AiOutlineGithub } from 'react-icons/ai';
import { FaEye } from 'react-icons/fa';

interface projectType {
  id: number;
  name: string;
  img: string;
  link: string;
  github: string;
}

const Projects = () => {
  return (
    <main className='home'>
      <section className='projects'>
        <h3>My Projects</h3>
        <div className='projects__container'>
          {projectsData.map((project) => {
            const { id, name, img, link, github }: projectType = project;
            return (
              <article key={id}>
                <img src={img} alt={name} />
                <div className='projects__btn'>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href={link}
                    className='projects__btn--link'
                  >
                    <FaEye className='projects__icons' /> Preview
                  </a>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href={github}
                    className='projects__btn--link'
                  >
                    <AiOutlineGithub className='projects__icons' /> Github
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Projects;
