import React from 'react'

export default function Footer() {
  return (
    <footer className='flex flex-col min-h-[30vh] bg-[#2363eb]'>
      <div className="flex text-white flex-col md:flex-row p-10 gap-8 md:gap-0 justify-evenly">
        <span className="logo  text-4xl">MovieHubb</span>
        <ul className='flex flex-col gap-3'>
          <li>Contribute</li>
          <li>

            <a href="https://www.buymeacoffee.com/afobaje" target="_blank">
              <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style={{ height: '60px', width: '217px', }} />
            </a>
          </li>
        </ul>
        <ul className='flex flex-col gap-3'>
          <li>Socials</li>
          <li><a target='_blank' className='hover:underline' href="https://linkedin.com/in/ikukoyi-david">Linkedin</a></li>
          <li><a target='_blank' className='hover:underline' href="https://twitter.com/davidblaqq">Twitter</a></li>
          <li><a target='_blank' className='hover:underline' href="https://afobaje.hashnode.dev">Blog</a></li>
        </ul>

      </div>
    </footer>
  )
}
