import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title:
    'Web3\u002DReady\u0020UX\u0020Design\u0020Services\u0020for\u0020Innovative\u0020SaaS\u0020Solutions',
  meta: [
    {
      name: 'description',
      content:
        'Elevate\u0020your\u0020software\u0027s\u0020user\u0020experience\u0020with\u0020our\u0020expert\u0020UX\u0020design\u0020team.\u0020Specializing\u0020in\u0020high\u002Dtech,\u0020SaaS,\u0020and\u0020Web3\u0020solutions,\u0020we\u0020create\u0020intuitive,\u0020future\u002Dproof\u0020designs\u0020that\u0020captivate\u0020users\u0020and\u0020drive\u0020engagement.\n\nOur\u0020UX\u0020design\u0020experts\u0020are\u0020at\u0020the\u0020forefront\u0020of\u0020technology.\u0020Partner\u0020with\u0020us\u0020for\u0020high\u002Dtech,\u0020SaaS,\u0020and\u0020Web3\u0020UX\u0020designs\u0020that\u0020set\u0020your\u0020software\u0020apart,\u0020delivering\u0020seamless,\u0020user\u002Dcentric\u0020experiences\u0020that\u0020boost\u0020your\u0020product\u0027s\u0020success.\n\nEmbrace\u0020the\u0020future\u0020of\u0020technology\u0020with\u0020Web3\u002Dready\u0020UX\u0020design\u0020services.\u0020Our\u0020team\u0020specializes\u0020in\u0020creating\u0020user\u0020experiences\u0020that\u0020integrate\u0020seamlessly\u0020with\u0020high\u002Dtech\u0020and\u0020SaaS\u0020platforms,\u0020ensuring\u0020your\u0020product\u0020stands\u0020out\u0020in\u0020the\u0020digital\u0020landscape.\n\nDrive\u0020innovation\u0020with\u0020our\u0020cutting\u002Dedge\u0020SaaS\u0020UX\u0020design\u0020services.\u0020We\u0020help\u0020you\u0020create\u0020user\u002Dcentric\u0020interfaces\u0020that\u0020cater\u0020to\u0020the\u0020demands\u0020of\u0020the\u0020high\u002Dtech\u0020world\u0020and\u0020Web3\u0020ecosystems,\u0020ensuring\u0020your\u0020software\u0020remains\u0020competitive.\n\nAre\u0020you\u0020ready\u0020for\u0020the\u0020future\u0020of\u0020tech\u003F\u0020Our\u0020UX\u0020design\u0020team\u0020is.\u0020We\u0020craft\u0020innovative,\u0020user\u002Dfriendly\u0020interfaces\u0020for\u0020high\u002Dtech,\u0020SaaS,\u0020and\u0020Web3\u0020platforms,\u0020helping\u0020you\u0020stay\u0020ahead\u0020in\u0020a\u0020rapidly\u0020evolving\u0020digital\u0020landscape.',
    },
  ],
  link: [],
  style: [],
  script: [],
};

export default function UxDesignProcess() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section>
          <nav className='relative bg-white z-50 py-4'>
            <div className='container px-4 mx-auto'>
              <div className='flex items-center relative rounded-xl'>
                <a className='inline-block text-lg font-bold' href='index.html'>
                  <img
                    className='h-20'
                    src='images/OktoLogo.svg'
                    alt=''
                    width='auto'
                  />
                </a>
                <div className='xl:hidden ml-auto'>
                  <button className='navbar-burger flex w-12 h-12 items-center justify-center hover:bg-gray-200 rounded-md transition duration-200'>
                    <svg
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M3 12H21'
                        stroke='black'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M3 6H21'
                        stroke='black'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M3 18H21'
                        stroke='black'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </button>
                </div>
                <ul className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden xl:flex lg:w-auto lg:space-x-10'>
                  <li className='group relative'>
                    <a
                      className='inline-block text-sm text-gray-900 hover:text-orange-900 font-medium'
                      href='index.html'
                    >
                      Home
                    </a>
                    <div className='hidden group-hover:block absolute top-full left-0 min-w-max max-w-xs p-4 z-50'>
                      <div className='-mb-2 ml-8 w-4 h-4 rounded-sm bg-white border-l border-t border-gray-200 transform rotate-45' />
                      <div className='w-full max-w-xs bg-white border border-gray-100 rounded-3xl pt-4 pb-4 px-4'>
                        <div className='pb-3 mb-3 border-b border-gray-100'>
                          <a
                            className='block py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg'
                            href='#'
                          >
                            Featured
                          </a>
                          <a
                            className='block py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg'
                            href='#'
                          >
                            Solutions
                          </a>
                        </div>
                        <div className='pb-3 mb-3 border-b border-gray-100'>
                          <a
                            className='flex mb-2 items-center py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg'
                            href='#'
                          >
                            <img
                              src='saturn-assets/images/headers/icon-download.svg'
                              alt=''
                            />
                            <span className='ml-3'>Download</span>
                          </a>
                          <a
                            className='flex mb-2 items-center py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg'
                            href='#'
                          >
                            <img
                              src='saturn-assets/images/headers/icon-slack.svg'
                              alt=''
                            />
                            <span className='ml-3'>Community</span>
                          </a>
                          <a
                            className='flex mb-2 items-center py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg'
                            href='#'
                          >
                            <img
                              src='saturn-assets/images/headers/icon-help.svg'
                              alt=''
                            />
                            <span className='ml-3'>Help</span>
                          </a>
                        </div>
                        <div className='flex items-center pb-3 mb-3 border-b border-gray-100'>
                          <a
                            className='inline-block px-4 py-3 mr-6 text-sm font-semibold text-orange-900 hover:text-gray-900'
                            href='connect.html'
                          >
                            Connect
                          </a>
                          <a
                            className='inline-block py-3 px-4 text-sm font-semibold text-orange-900 hover:text-white border border-gray-200 hover:border-orange-600 hover:bg-orange-900 rounded-md transition duration-200'
                            href='#'
                          >
                            Create an account
                          </a>
                        </div>
                        <div className='flex items-center'>
                          <div className='flex w-10 h-10 items-center justify-center bg-orange-50 rounded-full'>
                            <img
                              src='saturn-assets/images/headers/icon-email-me.svg'
                              alt=''
                            />
                          </div>
                          <div className='ml-3'>
                            <span className='block text-xs text-gray-500'>
                              Drop us a line
                            </span>
                            <a
                              className='text-sm font-semibold text-black hover:text-orange-900'
                              href='#'
                            >
                              hello@shuffle.dev
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a
                      className='inline-block text-sm text-gray-900 hover:text-orange-900 font-medium'
                      href='ux-design-team-story.html'
                    >
                      Our Ethos
                    </a>
                  </li>
                  <li>
                    <a
                      className='inline-block text-sm text-gray-900 hover:text-orange-900 font-medium'
                      href='ux-design-process.html'
                    >
                      Methodology
                    </a>
                  </li>
                  <li></li>
                  <li></li>
                </ul>
                <div className='hidden xl:block ml-auto'>
                  <div className='flex items-center'>
                    <a
                      className='inline-block mr-9 text-sm font-semibold text-orange-900 hover:text-gray-900'
                      href='ux-blog.html'
                    >
                      News &amp; Insights
                    </a>
                    <a
                      className='relative group inline-block py-3 px-4 text-sm font-semibold text-orange-900 hover:text-orange-50 bg-orange-50 rounded-md overflow-hidden transition duration-300'
                      href='connect.html'
                    >
                      <div className='absolute top-0 right-full w-full h-full bg-orange-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500 font-sans rounded-xl' />
                      <span className='relative font-bold'>CONNECT &amp;</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className='navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50 hidden'>
            <div className='navbar-backdrop fixed inset-0 bg-gray-800 opacity-25' />
            <nav className='relative flex flex-col py-6 px-10 w-full h-full bg-white border-r overflow-y-auto'>
              <div className='flex items-center mb-16'>
                <a
                  className='mr-auto text-2xl font-medium leading-none'
                  href='#'
                >
                  <img
                    className='h-10'
                    src='images/OktoLogo.svg'
                    alt=''
                    width='auto'
                  />
                </a>
                <button className='navbar-close'>
                  <svg
                    className='h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>
              <div>
                <ul className='mb-2'>
                  <li>
                    <a
                      className='block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg'
                      href='index.html'
                      contentEditable='false'
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className='block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg'
                      href='ux-design-team-story.html'
                      contentEditable='false'
                    >
                      Our Ethos
                    </a>
                  </li>
                  <li>
                    <a
                      className='block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg'
                      href='ux-design-process.html'
                    >
                      Methodology
                    </a>
                  </li>
                  <li></li>
                  <li></li>
                </ul>
                <div className='py-8 px-6 mb-6 border-t border-b border-gray-200'>
                  <a
                    className='flex items-center text-sm font-semibold text-orange-900 hover:text-orange-600'
                    href='connect.html'
                  >
                    <svg
                      width={18}
                      height={16}
                      viewBox='0 0 18 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M17.3337 6.05833C17.2811 5.9059 17.1854 5.77202 17.0582 5.67292C16.931 5.57381 16.7777 5.51374 16.617 5.5L11.8754 4.80833L9.75038 0.499999C9.68215 0.359106 9.5756 0.240284 9.44296 0.157143C9.31031 0.074003 9.15693 0.0299072 9.00039 0.0299072C8.84384 0.0299072 8.69046 0.074003 8.55781 0.157143C8.42517 0.240284 8.31862 0.359106 8.25039 0.499999L6.12539 4.8L1.38372 5.5C1.22949 5.52192 1.08449 5.58663 0.96518 5.6868C0.845868 5.78696 0.757021 5.91856 0.708721 6.06666C0.664509 6.21139 0.660541 6.36543 0.697245 6.51224C0.733948 6.65905 0.809936 6.7931 0.917055 6.9L4.35872 10.2333L3.52539 14.9667C3.49564 15.1229 3.51121 15.2844 3.57028 15.432C3.62935 15.5797 3.72943 15.7074 3.85872 15.8C3.98474 15.8901 4.13337 15.9433 4.28793 15.9536C4.44249 15.9639 4.59686 15.9309 4.73372 15.8583L9.00039 13.6333L13.2504 15.8667C13.3673 15.9326 13.4994 15.9671 13.6337 15.9667C13.8102 15.9673 13.9824 15.9118 14.1254 15.8083C14.2547 15.7157 14.3548 15.588 14.4138 15.4404C14.4729 15.2927 14.4885 15.1312 14.4587 14.975L13.6254 10.2417L17.067 6.90833C17.1874 6.8064 17.2763 6.67242 17.3235 6.52195C17.3707 6.37149 17.3742 6.21073 17.3337 6.05833ZM12.2087 9.39166C12.111 9.48619 12.0379 9.6032 11.9957 9.73247C11.9536 9.86175 11.9438 9.99937 11.9671 10.1333L12.5671 13.625L9.43372 11.9583C9.31315 11.8941 9.17865 11.8605 9.04205 11.8605C8.90546 11.8605 8.77095 11.8941 8.65039 11.9583L5.51705 13.625L6.11705 10.1333C6.14033 9.99937 6.13048 9.86175 6.08836 9.73247C6.04623 9.6032 5.97312 9.48619 5.87539 9.39166L3.37539 6.89166L6.88372 6.38333C7.01872 6.36455 7.14705 6.31295 7.25747 6.23304C7.36789 6.15313 7.45702 6.04736 7.51705 5.925L9.00039 2.75L10.5671 5.93333C10.6271 6.0557 10.7162 6.16147 10.8266 6.24137C10.9371 6.32128 11.0654 6.37289 11.2004 6.39166L14.7087 6.9L12.2087 9.39166Z'
                        fill='currentColor'
                      />
                    </svg>
                    <span className='ml-3' contentEditable='false'>
                      Connect&nbsp;
                    </span>
                  </a>
                </div>
                <div>
                  <div className='flex w-20 h-20 mb-6 items-center justify-center bg-orange-50 rounded-full'>
                    <svg
                      width={29}
                      height={28}
                      viewBox='0 0 29 28'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M25.3333 16.6667C24.9797 16.6667 24.6406 16.8072 24.3905 17.0572C24.1405 17.3073 24 17.6464 24 18V23.3334C24 23.687 23.8595 24.0261 23.6095 24.2762C23.3594 24.5262 23.0203 24.6667 22.6667 24.6667H4C3.64638 24.6667 3.30724 24.5262 3.05719 24.2762C2.80714 24.0261 2.66667 23.687 2.66667 23.3334V10.5467L10.5067 18.4C11.2567 19.1491 12.2733 19.5698 13.3333 19.5698C14.3933 19.5698 15.41 19.1491 16.16 18.4L18.3467 16.2134C18.5977 15.9623 18.7388 15.6218 18.7388 15.2667C18.7388 14.9116 18.5977 14.5711 18.3467 14.32C18.0956 14.069 17.7551 13.9279 17.4 13.9279C17.0449 13.9279 16.7044 14.069 16.4533 14.32L14.2667 16.5067C14.0174 16.751 13.6823 16.8878 13.3333 16.8878C12.9843 16.8878 12.6492 16.751 12.4 16.5067L4.54667 8.66669H13.3333C13.687 8.66669 14.0261 8.52622 14.2761 8.27617C14.5262 8.02612 14.6667 7.68698 14.6667 7.33336C14.6667 6.97974 14.5262 6.6406 14.2761 6.39055C14.0261 6.1405 13.687 6.00002 13.3333 6.00002H4C2.93913 6.00002 1.92172 6.42145 1.17157 7.1716C0.421427 7.92174 0 8.93916 0 10V23.3334C0 24.3942 0.421427 25.4116 1.17157 26.1618C1.92172 26.9119 2.93913 27.3334 4 27.3334H22.6667C23.7275 27.3334 24.7449 26.9119 25.4951 26.1618C26.2452 25.4116 26.6667 24.3942 26.6667 23.3334V18C26.6667 17.6464 26.5262 17.3073 26.2761 17.0572C26.0261 16.8072 25.687 16.6667 25.3333 16.6667ZM27.6133 5.05336L23.6133 1.05336C23.4865 0.93197 23.337 0.836817 23.1733 0.773358C22.8487 0.64 22.4846 0.64 22.16 0.773358C21.9963 0.836817 21.8468 0.93197 21.72 1.05336L17.72 5.05336C17.4689 5.30443 17.3279 5.64496 17.3279 6.00002C17.3279 6.35509 17.4689 6.69562 17.72 6.94669C17.9711 7.19776 18.3116 7.33881 18.6667 7.33881C19.0217 7.33881 19.3623 7.19776 19.6133 6.94669L21.3333 5.21336V12.6667C21.3333 13.0203 21.4738 13.3595 21.7239 13.6095C21.9739 13.8595 22.313 14 22.6667 14C23.0203 14 23.3594 13.8595 23.6095 13.6095C23.8595 13.3595 24 13.0203 24 12.6667V5.21336L25.72 6.94669C25.844 7.07166 25.9914 7.17086 26.1539 7.23855C26.3164 7.30624 26.4907 7.34109 26.6667 7.34109C26.8427 7.34109 27.017 7.30624 27.1794 7.23855C27.3419 7.17086 27.4894 7.07166 27.6133 6.94669C27.7383 6.82274 27.8375 6.67527 27.9052 6.51279C27.9729 6.35032 28.0077 6.17604 28.0077 6.00002C28.0077 5.82401 27.9729 5.64973 27.9052 5.48726C27.8375 5.32478 27.7383 5.17731 27.6133 5.05336Z'
                        fill='black'
                      />
                    </svg>
                  </div>
                  <span className='block mb-3 text-sm text-gray-500'>
                    Drop us a line
                  </span>
                  <a
                    className='font-semibold text-black'
                    href='#'
                    contentEditable='false'
                  >
                    hello@oktopeople.com
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </section>
        <section className='relative md:pb-20 lg:pt-32 overflow-hidden'>
          <img
            className='absolute bottom-0 left-0'
            src='saturn-assets/images/features/start-left-bottom.png'
            alt=''
          />
          <img
            className='absolute bottom-1/2 right-0 transform translate-y-1/2'
            src='saturn-assets/images/features/blue-light-right.png'
            alt=''
          />
          <div className='relative container px-4 mx-auto'>
            <div className='max-w-7xl mx-auto pb-10'>
              <div className='flex flex-wrap items-center -mx-4 mb-24'>
                <div className='w-full lg:w-2/3 px-4 mb-16 lg:mb-0'>
                  <div className='max-w-lg lg:max-w-2xl mx-auto lg:mx-0'>
                    <h1 className='font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-gray-900 mb-8'>
                      <span>How do we help our client solve</span>
                      <span className='font-serif italic'>problems</span>
                    </h1>
                    <p className='max-w-xl text-2xl md:text-3xl font-semibold text-gray-400'>
                      Discover the steps that power our cutting-edge UX design
                      process, ensuring user-centered solutions that elevate
                      your product.
                    </p>
                  </div>
                </div>
                <div className='w-full lg:w-1/3 px-4'>
                  <img
                    className='w-full max-w-lg mx-auto lg:mr-0 backdrop-blur-3xl transform-gpu'
                    src='images/case-study2-6.svg'
                    alt=''
                  />
                </div>
              </div>
              <div className='flex flex-wrap -mx-4'>
                <div className='w-full lg:w-1/3 px-4 mb-12 lg:mb-0 lg:border-r border-gray-100'>
                  <div className='max-w-xs mx-auto pb-10 lg:pb-5 text-center border-b border-gray-100 lg:border-b-0'>
                    <div className='flex mx-auto mb-5 items-center justify-center w-15 h-15 rounded-full bg-green-200'>
                      <img
                        src='saturn-assets/images/features/icon-mouse.svg'
                        alt=''
                      />
                    </div>
                    <h4 className='text-2xl text-gray-900 font-semibold'>
                      Business Logic Design
                    </h4>
                    <p className='text-gray-500 font-black'>
                      Research &amp; Analysis: Dive deep into your target
                      audience, industry, and goals to inform our design
                      strategy.
                    </p>
                  </div>
                </div>
                <div className='w-full lg:w-1/3 px-4 mb-12 lg:mb-0 lg:border-r border-gray-100'>
                  <div className='max-w-xs mx-auto pb-10 lg:pb-5 text-center border-b border-gray-100 lg:border-b-0'>
                    <div className='flex mx-auto mb-5 items-center justify-center w-15 h-15 rounded-full bg-orange-200'>
                      <img
                        src='saturn-assets/images/features/icon-point.svg'
                        alt=''
                      />
                    </div>
                    <h4 className='text-2xl text-gray-900 font-semibold'>
                      Rapid Prototyping&nbsp;
                    </h4>
                    <p className='text-gray-500 font-black'>
                      Ideation &amp; Prototyping: Brainstorming and rapid
                      prototyping to bring innovative ideas to life.
                    </p>
                  </div>
                </div>
                <div className='w-full lg:w-1/3 px-4 lg:pb-5'>
                  <div className='max-w-xs mx-auto text-center'>
                    <div className='flex mx-auto mb-5 items-center justify-center w-15 h-15 rounded-full bg-purple-300'>
                      <img
                        src='saturn-assets/images/features/icon-plane.svg'
                        alt=''
                      />
                    </div>
                    <h4 className='text-2xl text-gray-900 font-semibold'>
                      User Testing
                    </h4>
                    <p className='text-gray-500 font-black'>
                      Iterative design with real users to fine-tune every
                      detail. Then we move into UI design and align with your IT
                      teams.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=''>
          <div className='container mx-auto overflow-hidden'></div>
          <div className='pt-10 bg-indigo-900 pb-20'>
            <div className='container mx-auto'>
              <div className='flex flex-wrap px-4'>
                <div
                  className='w-full mt-20 text-white md:w-1/2 leading-10 pr-4'
                  contentEditable='false'
                >
                  <h1 className='font-bold'>
                    <span data-metadata='<!--(figmeta)eyJmaWxlS2V5IjoiWjJDM2dJaW9BWVo5WjlFNkt6Y1VQZiIsInBhc3RlSUQiOjE4OTQ2NDYxMDIsImRhdGFUeXBlIjoic2NlbmUifQo=(/figmeta)-->' />
                    <span data-buffer='<!--(figma)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(/figma)-->' />
                    <span
                      style={{ whiteSpace: 'pre-wrap' }}
                      className='font-sans font-heading text-5xl xs:text-6xl md:text-7xl font-bold w-max'
                      contentEditable='false'
                      data-gramm='false'
                      wt-ignore-input='true'
                      data-quillbot-element='MMq7Xvf8fG6gNaX5yvx9s'
                    >
                      User Research{' '}
                    </span>
                  </h1>
                  <h6
                    className='font-heading text-white tracking-px mt-5 inline-block font-extrabold mb-2'
                    contentEditable='false'
                  >
                    IS OUR NORTH STAR ✦
                  </h6>
                  <div contentEditable='false' className='text-2xl'>
                    As experienced tech workers, we've consistently applied UX
                    best practices in projects of all sizes, driven by user
                    research and Agile Scrum processes. We've also crafted a
                    unique system to define our industry, business model, and
                    success metrics, setting us apart from competitors.
                    <br />
                  </div>
                  <p />
                  <p
                    className='mb-11 text-lg text-gray-900 font-medium md:max-w-md'
                    contentEditable='false'
                  />
                  <div className='flex flex-wrap -m-2.5 mb-5'>
                    <div className='w-full md:w-auto p-2.5'>
                      <div className='block'>
                        <div className='block'>
                          <button
                            className='w-full text-white focus:ring transition ease-in-out duration-200 font-bold pointer-events-auto bg-red-800 rounded px-7 py-3 rounded-xl'
                            type='button'
                            contentEditable='false'
                          >
                            {' '}
                            <a
                              className='text-white hover:text-gray-200 hover:no-underline font-extrabold'
                              href='https://calendly.com/oktopeople/30min'
                              contentEditable='false'
                              data-gramm='false'
                              wt-ignore-input='true'
                              data-quillbot-element='5Tc9R7GUGwQ0tDEZ8vXwB'
                            >
                              BOOK A MEETING&nbsp; &amp;
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='md:w-1/2 relative mt-10'>
                  <img
                    className='transition duration-1000 hover:-translate-y-4 ease-in-out transform'
                    src='https://static.shuffle.dev/uploads/files/9a/9abb4eb08f9a6173aedd9548503a39bf27855211/Frame-753-4.svg'
                    alt='okto image'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='relative py-20 md:py-32 overflow-hidden bg-gray-50'>
          <img
            className='absolute top-0 left-0 mt-44'
            src='saturn-assets/images/faq/light-blue-left.png'
            alt=''
          />
          <img
            className='absolute top-0 right-0 mt-10'
            src='saturn-assets/images/faq/star-right.svg'
            alt=''
          />
          <div className='relative container px-4 mx-auto'>
            <div className='max-w-7xl mx-auto font-black'>
              <div className='text-center mb-24'>
                <span className='inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full'>
                  FREQUENTLY ASK QUESTION
                </span>
                <h1 className='font-heading text-5xl xs:text-6xl md:text-7xl font-bold'>
                  <span>You ask? We</span>
                  <span className='font-serif italic'>answer</span>
                </h1>
              </div>
              <div className='flex flex-wrap -mx-4 -mb-8'>
                <div className='w-full sm:w-1/2 lg:w-1/3 px-4 mb-8'>
                  <div className='flex flex-col h-full max-w-xs mx-auto md:max-w-none px-6 py-9 md:pl-9 md:pr-12 bg-white rounded-3xl shadow-lg'>
                    <h4 className='text-xl font-semibold text-gray-900 mb-4'>
                      How to Work with Us?
                    </h4>
                    <p className='text-gray-500 mb-4'>
                      Before arranging a call or meeting,&nbsp; we ask for your
                      cooperation in completing a project requirement form,
                      including your company information. This step enables us
                      to better evaluate whether our services align with your
                      specific needs and budget.
                    </p>
                    <a
                      className='inline-block mt-auto font-semibold text-orange-900 hover:underline text-base'
                      href='#'
                    >
                      Request a form
                    </a>
                  </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 px-4 mb-8'>
                  <div className='flex flex-col h-full max-w-xs mx-auto md:max-w-none px-6 py-9 md:pl-9 md:pr-12 bg-white rounded-3xl shadow-lg'>
                    <h4 className='text-xl font-semibold text-gray-900 mb-4'>
                      Transparent Pricing Structure
                    </h4>
                    <p className='text-gray-500 mb-4'>
                      Hourly Rates: Our competitive rates reflect our commitment
                      to quality and efficiency. Fixed-Price Projects: For
                      well-defined projects, we offer fixed-price options to
                      align with your budget. Retainer Plans: Explore ongoing UX
                      support with our flexible retainer plans.
                    </p>
                    <a
                      className='inline-block mt-auto font-semibold text-orange-900 hover:underline text-base'
                      href='#'
                    >
                      Read More
                    </a>
                  </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 px-4 mb-8'>
                  <div className='flex flex-col h-full max-w-xs mx-auto md:max-w-none px-6 py-9 md:pl-9 md:pr-12 bg-white rounded-3xl shadow-lg'>
                    <h4 className='text-xl font-semibold text-gray-900 mb-4'>
                      Seamless Collaboration
                    </h4>
                    <p className='text-gray-500 mb-4'>
                      Regular Updates: We provide consistent project updates and
                      milestones. Communication Channels: Reach us through
                      preferred channels for easy communication. Client Input:
                      Your feedback and ideas are invaluable and integrated into
                      our process. Post-Project Support: We're here to assist
                      even after project completion
                    </p>
                    <a
                      className='inline-block mt-auto font-semibold text-orange-900 hover:underline text-base'
                      href='#'
                    >
                      Read More
                    </a>
                  </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 px-4 mb-8'>
                  <div className='flex flex-col h-full max-w-xs mx-auto md:max-w-none px-6 py-9 md:pl-9 md:pr-12 bg-white rounded-3xl shadow-lg'>
                    <h4 className='text-xl font-semibold text-gray-900 mb-4'>
                      Project Timelines
                    </h4>
                    <p className='text-gray-500 mb-4'>
                      Milestone Planning: Detailed timelines and milestones keep
                      us on track. Agile Approach: Flexibility to adapt to
                      changes while staying on schedule. Quality Assurance:
                      Rigorous testing and review processes to meet deadlines.
                      Client Involvement: Your input and approval are essential
                      in maintaining project timelines.
                    </p>
                    <a
                      className='inline-block mt-auto font-semibold text-orange-900 hover:underline text-base'
                      href='#'
                    >
                      Read More
                    </a>
                  </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 px-4 mb-8'>
                  <div className='flex flex-col h-full max-w-xs mx-auto md:max-w-none px-6 py-9 md:pl-9 md:pr-12 bg-white rounded-3xl shadow-lg'>
                    <h4 className='text-xl font-semibold text-gray-900 mb-4'>
                      Measuring Success
                    </h4>
                    <p className='text-gray-500 mb-4'>
                      User-Centered Metrics: We focus on user satisfaction,
                      engagement, and conversions. Data-Driven Insights:
                      Leveraging data to refine and enhance UX over time. Client
                      Feedback: Your input helps us ensure our designs align
                      with your goals.
                    </p>
                    <a
                      className='inline-block mt-auto font-semibold text-orange-900 hover:underline text-base'
                      href='#'
                    >
                      Read More
                    </a>
                  </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 px-4 mb-8'>
                  <div className='flex flex-col h-full max-w-xs mx-auto md:max-w-none px-6 py-9 md:pl-9 md:pr-12 bg-white rounded-3xl shadow-lg'>
                    <h4 className='text-xl font-semibold text-gray-900 mb-4'>
                      Embracing Innovation
                    </h4>
                    <p className='text-gray-500 mb-4'>
                      We continuously explore and implement new technologies
                      like generative AI to enhance work quality and efficiency.
                      Rest assured, we always deliver unique and tailored
                      projects that meet your specific needs
                    </p>
                    <a
                      className='inline-block mt-auto font-semibold text-orange-900 hover:underline text-base'
                      href='#'
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='relative py-20 overflow-hidden'>
          <img
            className='absolute top-0 left-0'
            src='saturn-assets/images/footers/blue-light-left.png'
            alt=''
          />
          <img
            className='absolute bottom-0 left-1/2 transform -translate-x-1/2'
            src='saturn-assets/images/footers/orange-light-bottom.png'
            alt=''
          />
          <div className='relative container px-4 mx-auto'>
            <div className='max-w-7xl mx-auto'>
              <div className='pb-10 mb-10 border-b border-gray-100 items-center'>
                <div className='flex flex-wrap -mx-4 items-center'>
                  <div className='w-full lg:w-1/2 px-4 mb-4 lg:mb-0'>
                    <a className='inline-block' href='#'>
                      <img
                        className='h-20'
                        src='images/OktoLogo.svg'
                        alt=''
                      />
                    </a>
                  </div>
                  <div className='w-full lg:w-1/2 px-4'></div>
                </div>
              </div>
              <div className='flex flex-wrap -mx-4 mb-18'>
                <div className='w-full lg:w-2/5 px-4 mb-12 lg:mb-0'>
                  <div className='xs:max-w-xs' contentEditable='false'>
                    <h4
                      className='font-heading text-2xl font-semibold text-gray-900 mb-4'
                      contentEditable='true'
                      data-gramm='false'
                      wt-ignore-input='true'
                      data-quillbot-element='VTsDpNwSylBmG007uVG-_'
                    >
                      OktoPeople OÜ&nbsp;🇪🇪&nbsp;&nbsp;&nbsp;
                      <div>
                        Tallinn, Estonia&nbsp;&nbsp;&nbsp;
                        <div>&nbsp;14399767&nbsp;</div>
                      </div>
                    </h4>
                    <form action=''>
                      <label
                        className='block mb-1.5 text-sm font-semibold text-gray-900 font-black text-orange-900 text-base'
                        htmlFor=''
                        contentEditable='false'
                        data-gramm='false'
                        wt-ignore-input='true'
                        data-quillbot-element='-Ix9ecBBhRuFxrRIHbd6R'
                      >
                        hello@oktopeople.com
                      </label>
                    </form>
                  </div>
                </div>
                <div className='w-full sm:w-1/3 lg:w-1/5 px-4 mb-8 sm:mb-0 font-black'>
                  <h5 className='text-lg font-semibold text-gray-900 mb-4'>
                    Services
                  </h5>
                  <ul>
                    <li className='mb-4 font-black'>
                      <a
                        className='inline-block text-gray-500 hover:text-gray-600'
                        href='#'
                      >
                        Our Services
                      </a>
                    </li>
                    <li className='mb-4'>
                      <a
                        className='inline-block text-gray-500 hover:text-gray-600 font-black'
                        href='#'
                      >
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a
                        className='inline-block text-gray-500 hover:text-gray-600'
                        href='#'
                      >
                        Trainings
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='w-full sm:w-1/3 lg:w-1/5 px-4 mb-8 sm:mb-0 font-black'>
                  <h5 className='text-lg font-semibold text-gray-900 mb-3'>
                    About
                  </h5>
                  <ul>
                    <li className='mb-4'>
                      <a
                        className='inline-block text-gray-500 hover:text-gray-600'
                        href='ux-design-process.html'
                      >
                        Our Process
                      </a>
                    </li>
                    <li className='mb-4'>
                      <a
                        className='inline-block text-gray-500 hover:text-gray-600'
                        href='ux-design-team-story.html'
                      >
                        Story
                      </a>
                    </li>
                    <li>
                      <a
                        className='inline-block text-gray-500 hover:text-gray-600'
                        href='ux-blog.html'
                      >
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='w-full sm:w-1/3 lg:w-1/5 px-4 font-black'>
                  <h5 className='text-lg font-semibold text-gray-900 mb-4'>
                    Help
                  </h5>
                  <ul>
                    <li className='mb-4'>
                      <a
                        className='inline-block text-gray-500 hover:text-gray-600'
                        href='ux-design-faq.html'
                      >
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a
                        className='inline-block text-gray-500 hover:text-gray-600 mb-4'
                        href='connect.html'
                      >
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a
                        className='inline-block text-gray-500 hover:text-gray-600'
                        href='sitemap.html'
                      >
                        Sitemap
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='sm:flex items-center justify-between'>
                <div className='sm:flex mb-6 sm:mb-0 items-center'>
                  <a
                    className='inline-block mr-6 sm:mr-12 text-gray-900 hover:text-gray-600'
                    href='#'
                  >
                    Terms &amp; Conditions
                  </a>
                  <a
                    className='inline-block text-gray-900 hover:text-gray-600'
                    href='#'
                  >
                    Privacy Policy
                  </a>
                </div>
                <div className='flex items-center'>
                  <a
                    className='inline-block mr-5 hover:bg-orange-50 rounded-md p-1'
                    href='#'
                  ></a>
                  <a
                    className='inline-block mr-5 hover:bg-orange-50 rounded-md p-1'
                    href='#'
                  ></a>
                  <a
                    className='inline-block mr-5 hover:bg-orange-50 rounded-md p-1'
                    href='#'
                  ></a>
                  <a
                    className='inline-block hover:bg-orange-50 rounded-md p-1'
                    href='https://www.linkedin.com/company/oktopeople'
                  >
                    <img
                      src='saturn-assets/images/footers/icon-linkedin.svg'
                      alt=''
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}

