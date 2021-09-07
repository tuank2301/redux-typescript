import {
  AiOutlineGithub,
  AiOutlineHome,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { IoIosPhonePortrait, IoLogoFacebook } from 'react-icons/io';

const Contact = () => {
  return (
    <main className='home'>
      <div className='contact'>
        <h3>Contact Me</h3>
        <address className='contact__container'>
          <article>
            <h4>
              <AiOutlineMail className='contact__icons' />
              Email
            </h4>
            <a href='mailto:tuank2301@gmail.com'>tuank2301@gmail.com</a>
          </article>
          <article>
            <h4>
              <IoIosPhonePortrait className='contact__icons' />
              Phone
            </h4>
            <p>0969 199 469</p>
          </article>
          <article>
            <h4>
              <AiOutlineHome className='contact__icons' />
              Address
            </h4>
            <p>Tô Ngọc Vân, Tây Hồ, Hà Nội</p>
          </article>
        </address>
        <div>
          <AiOutlineTwitter className='contact__icons--link' />
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.facebook.com/tuprinceank/'
          >
            <IoLogoFacebook className='contact__icons--link' />
          </a>
          <AiOutlineInstagram className='contact__icons--link' />
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/tuank2301'
          >
            <AiOutlineGithub className='contact__icons--link' />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Contact;
