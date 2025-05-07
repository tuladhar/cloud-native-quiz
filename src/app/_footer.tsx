import { SiX, SiLinkedin, SiGithub } from '@icons-pack/react-simple-icons';

export default function Footer() {
  return (
    <footer className="mt-8 text-center text-gray-400 text-sm">
      {/* <p className="mb-1">Created by <a className='text-blue-300' target='_blank' href='https://www.purutuladhar.com'>Puru Tuladhar</a> – Sharpen your skills and keep learning!</p> */}
      <p className="mb-1">Made with 💜 by <a className='text-blue-300' target='_blank' href='https://www.linkedin.com/in/ptuladhar3/'>Puru Tuladhar</a></p>
      {/* <a href="https://tally.so/r/3N4O8W" target='_blank' className='text-underline'>Leave a <span className="text-blue-300">feedback</span></a> | <a href="https://patreon.com/puru" target='_blank' className=''>Support me on <span className="text-blue-300">Patreon</span></a><br /><br /> */}
      <a href="https://tally.so/r/3N4O8W" target='_blank' className='text-underline'>Leave a <span className="text-blue-300">feedback</span></a><br /><br />
      {/* <a href="https://tally.so/r/3N4O8W" target='_blank' className='text-underline'>Leave a <span className="text-blue-300">feedback</span></a><br /><br /> */}
      <div className="flex justify-center space-x-4">
        <a
          href="https://twitter.com/ptuladhar3"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
          aria-label=""
        >
          <SiX size={24} />
        </a>

        <a
          href="https://www.linkedin.com/in/ptuladhar3/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
          aria-label=""
        >
          <SiLinkedin size={24} />
        </a>

        <a
          href="https://github.com/tuladhar/cloud-native-quiz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
          aria-label=""
        >
          <SiGithub size={24} />
        </a>

      </div>
    </footer>
  );
}