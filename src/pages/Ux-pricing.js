import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function UxPricing() {
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
        <section className='relative pb-24 overflow-hidden bg-gray-50'>
          <div className='pt-32 pb-52 bg-orange-50'>
            <div className='container px-4 mx-auto'>
              <div className='max-w-2xl lg:max-w-5xl mx-auto mb-24 text-center'>
                <span className='inline-block py-1 px-3 mb-4 text-xs font-semibold bg-orange-900 text-orange-100 rounded-full uppercase'>
                  Pricing
                </span>
                <h1 className='font-heading text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6'>
                  <span>Inspiring possibility and applying</span>
                  <span className='font-serif italic'>innovation</span>
                </h1>
                <p className='text-lg text-gray-500'>
                  Lacinia eros at arcu gravida molestie faucibus.
                </p>
              </div>
            </div>
          </div>
          <div className='container px-4 mx-auto'>
            <div className='max-w-md lg:max-w-4xl mx-auto'>
              <div className='-mt-52 mb-16 lg:mb-8 py-9 px-8 sm:px-14 bg-white rounded-3xl shadow-xl'>
                <div className='flex flex-wrap -mx-4 items-center'>
                  <div className='w-full lg:w-2/5 mb-8 lg:mb-0 px-4 pb-12 lg:py-4 border-b lg:border-0 lg:border-r border-gray-100'>
                    <div className='text-center'>
                      <span className='block text-2xl font-semibold mb-4'>
                        Professional
                      </span>
                      <span className='block text-5xl font-bold text-gray-900 mb-5'>
                        $250
                      </span>
                      <a
                        className='relative group inline-block py-4 px-10 text-center text-orange-50 bg-orange-900 font-semibold rounded-full overflow-hidden transition duration-200'
                        href='#'
                      >
                        <div className='absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500' />
                        <span className='relative'>Get Started</span>
                      </a>
                    </div>
                  </div>
                  <div className='w-full lg:w-3/5 px-4 py-2'>
                    <div className='max-w-sm ml-auto'>
                      <p className='text-gray-500 mb-8'>
                        Simply dummy text of the printing and typesetting
                        industry.
                      </p>
                      <ul>
                        <li className='flex mb-6 items-center'>
                          <img
                            src='saturn-assets/images/pricing/green-check.svg'
                            alt=''
                          />
                          <span className='ml-2 text-sm text-gray-900'>
                            Design Style well organized
                          </span>
                        </li>
                        <li className='flex mb-6 items-center'>
                          <img
                            src='saturn-assets/images/pricing/green-check.svg'
                            alt=''
                          />
                          <span className='ml-2 text-sm text-gray-900'>
                            Component Library with many variants
                          </span>
                        </li>
                        <li className='flex items-center'>
                          <img
                            src='saturn-assets/images/pricing/green-check.svg'
                            alt=''
                          />
                          <span className='ml-2 text-sm text-gray-900'>
                            All limited links
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className='lg:flex items-center justify-center'>
                <div className='flex mb-12 lg:mb-0 sm:mr-24 items-center max-w-xs'>
                  <div className='flex flex-shrink-0 w-12 h-12 mr-4 items-center justify-center rounded-full bg-gray-100'>
                    <img
                      src='saturn-assets/images/pricing/icon-bill.svg'
                      alt=''
                    />
                  </div>
                  <p className='font-semibold text-gray-900'>
                    Billed just once and no monthly subscribtion
                  </p>
                </div>
                <div className='flex items-center max-w-xs'>
                  <div className='flex flex-shrink-0 w-12 h-12 mr-4 items-center justify-center rounded-full bg-gray-100'>
                    <img
                      src='saturn-assets/images/pricing/icon-shield.svg'
                      alt=''
                    />
                  </div>
                  <p className='font-semibold text-gray-900'>
                    Money back guarantee if there was any problem
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='relative py-20 overflow-hidden'>
          <img
            className='absolute top-0 right-0 -mr-32 md:-mr-0'
            src='saturn-assets/images/pricing/circle-star.png'
            alt=''
          />
          <div className='relative container px-4 mx-auto'>
            <div className='max-w-2xl lg:max-w-5xl mx-auto mb-18 text-center'>
              <h1 className='font-heading text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-10'>
                <span>Choose a plan for a more</span>
                <span className='font-serif italic'>advanced</span>
                <span>business</span>
              </h1>
              <div className='flex flex-col sm:flex-row mb-10 items-center justify-center'>
                <div className='flex mb-3 sm:mb-0 sm:mr-12 items-center'>
                  <svg
                    width={20}
                    height={14}
                    viewBox='0 0 20 14'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M18.6996 0.613392C18.5757 0.488421 18.4282 0.389228 18.2657 0.321536C18.1032 0.253845 17.929 0.218994 17.7529 0.218994C17.5769 0.218994 17.4027 0.253845 17.2402 0.321536C17.0777 0.389228 16.9302 0.488421 16.8063 0.613392L6.87294 10.5601L2.69961 6.37339C2.57092 6.24907 2.41899 6.15132 2.25252 6.08572C2.08605 6.02011 1.90828 5.98794 1.72937 5.99103C1.55047 5.99413 1.37392 6.03243 1.20982 6.10376C1.04571 6.17508 0.897262 6.27803 0.772944 6.40673C0.648626 6.53542 0.550874 6.68734 0.485269 6.85382C0.419663 7.02029 0.387489 7.19805 0.390585 7.37696C0.39368 7.55587 0.431984 7.73242 0.503308 7.89652C0.574633 8.06062 0.677582 8.20907 0.806277 8.33339L5.92628 13.4534C6.05023 13.5784 6.1977 13.6776 6.36018 13.7452C6.52265 13.8129 6.69693 13.8478 6.87294 13.8478C7.04896 13.8478 7.22323 13.8129 7.38571 13.7452C7.54819 13.6776 7.69566 13.5784 7.81961 13.4534L18.6996 2.57339C18.8349 2.44854 18.943 2.297 19.0168 2.12833C19.0907 1.95967 19.1289 1.77753 19.1289 1.59339C19.1289 1.40926 19.0907 1.22712 19.0168 1.05845C18.943 0.889784 18.8349 0.738248 18.6996 0.613392V0.613392Z'
                      fill='#0BB678'
                    />
                  </svg>
                  <span className='ml-2 text-lg font-semibold'>
                    Cancel Anytime
                  </span>
                </div>
                <div className='flex items-center'>
                  <svg
                    width={20}
                    height={14}
                    viewBox='0 0 20 14'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M18.6996 0.613392C18.5757 0.488421 18.4282 0.389228 18.2657 0.321536C18.1032 0.253845 17.929 0.218994 17.7529 0.218994C17.5769 0.218994 17.4027 0.253845 17.2402 0.321536C17.0777 0.389228 16.9302 0.488421 16.8063 0.613392L6.87294 10.5601L2.69961 6.37339C2.57092 6.24907 2.41899 6.15132 2.25252 6.08572C2.08605 6.02011 1.90828 5.98794 1.72937 5.99103C1.55047 5.99413 1.37392 6.03243 1.20982 6.10376C1.04571 6.17508 0.897262 6.27803 0.772944 6.40673C0.648626 6.53542 0.550874 6.68734 0.485269 6.85382C0.419663 7.02029 0.387489 7.19805 0.390585 7.37696C0.39368 7.55587 0.431984 7.73242 0.503308 7.89652C0.574633 8.06062 0.677582 8.20907 0.806277 8.33339L5.92628 13.4534C6.05023 13.5784 6.1977 13.6776 6.36018 13.7452C6.52265 13.8129 6.69693 13.8478 6.87294 13.8478C7.04896 13.8478 7.22323 13.8129 7.38571 13.7452C7.54819 13.6776 7.69566 13.5784 7.81961 13.4534L18.6996 2.57339C18.8349 2.44854 18.943 2.297 19.0168 2.12833C19.0907 1.95967 19.1289 1.77753 19.1289 1.59339C19.1289 1.40926 19.0907 1.22712 19.0168 1.05845C18.943 0.889784 18.8349 0.738248 18.6996 0.613392V0.613392Z'
                      fill='#0BB678'
                    />
                  </svg>
                  <span className='ml-2 text-lg font-semibold'>
                    Free 14-day trial
                  </span>
                </div>
              </div>
              <div className='flex items-center justify-center'>
                <span className='text-sm sm:text-xl text-gray-900'>
                  Billed Monthly
                </span>
                <div className='inline-flex mx-3 p-1 items-center justify-end bg-gray-100 rounded-full'>
                  <button className='w-5 h-5 bg-transparent rounded-full' />
                  <button className='w-5 h-5 bg-orange-900 rounded-full' />
                </div>
                <span className='text-sm sm:text-xl text-gray-900'>
                  Billed Yearly
                </span>
              </div>
            </div>
            <div className='max-w-7xl mx-auto'>
              <div className='flex flex-wrap -mx-4'>
                <div className='w-full lg:w-1/3 px-4 mb-8 lg:mb-0'>
                  <div className='max-w-sm lg:max-w-none mx-auto pt-10 px-10 pb-8 bg-white border border-gray-100 rounded-3xl'>
                    <div className='text-center mb-6'>
                      <h5 className='text-2xl font-semibold text-gray-900 mb-3'>
                        Economy
                      </h5>
                      <span className='block text-5xl font-bold text-gray-900 mb-3'>
                        $10
                      </span>
                      <span className='block text-gray-500 font-medium mb-6'>
                        per user, per month
                      </span>
                      <a
                        className='inline-block w-full py-4 px-6 text-center text-orange-900 border border-gray-200 hover:border-orange-900 font-semibold rounded-full transition duration-200'
                        href='#'
                      >
                        Start 7-days Trial
                      </a>
                    </div>
                    <ul>
                      <li className='flex mb-4 items-center'>
                        <img
                          src='saturn-assets/images/pricing/green-check.svg'
                          alt=''
                        />
                        <span className='ml-2 text-gray-900 font-medium'>
                          Unlimited Upload
                        </span>
                      </li>
                      <li className='flex mb-4 items-center'>
                        <img
                          src='saturn-assets/images/pricing/green-check.svg'
                          alt=''
                        />
                        <span className='ml-2 text-gray-900 font-medium'>
                          Advanced Statistic
                        </span>
                      </li>
                      <li className='flex mb-4 items-center'>
                        <img
                          src='saturn-assets/images/pricing/green-check.svg'
                          alt=''
                        />
                        <span className='ml-2 text-gray-900 font-medium'>
                          Profile Badge
                        </span>
                      </li>
                      <li className='flex mb-4 items-center'>
                        <img
                          src='saturn-assets/images/pricing/green-check.svg'
                          alt=''
                        />
                        <span className='ml-2 text-gray-900 font-medium'>
                          Access to the community
                        </span>
                      </li>
                      <li className='flex mb-4 items-center'>
                        <img
                          src='saturn-assets/images/pricing/check-circle-grey.svg'
                          alt=''
                        />
                        <span className='ml-2 text-gray-500 font-medium line-through'>
                          History of all Liked Photos
                        </span>
                      </li>
                      <li className='flex items-center'>
                        <img
                          src='saturn-assets/images/pricing/check-circle-grey.svg'
                          alt=''
                        />
                        <span className='ml-2 text-gray-500 font-medium line-through'>
                          Directory Listing
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='w-full lg:w-1/3 px-4 mb-8 lg:mb-0'>
                  <div className='max-w-sm lg:max-w-none mx-auto pt-10 px-10 pb-8 bg-gray-900 rounded-3xl'>
                    <div className='text-center mb-6'>
                      <h5 className='text-2xl font-semibold text-white mb-3'>
                        Economy
                      </h5>
                      <span className='block text-5xl font-bold text-white mb-3'>
                        $10
                      </span>
                      <span className='block text-gray-300 font-medium mb-6'>
                        per user, per month
                      </span>
                      <a
                        className='relative group inline-block w-full py-4 px-6 text-center text-orange-50 hover:text-orange-900 bg-orange-900 font-semibold rounded-full overflow-hidden transition duration-200'
                        href='#'
                      >
                        <div className='absolute top-0 right-full w-full h-full bg-white transform group-hover:translate-x-full group-hover:scale-102 transition duration-500' />
                        <span className='relative'>Start 7-days Trial</span>
                      </a>
                    </div>
                    <ul>
                      <li className='flex mb-4 items-center'>
                        <img
                          src='saturn-assets/images/pricing/green-check.svg'
                          alt=''
                        />
                        <span className='ml-2 text-white'>
                          Unlimited Upload
                        </span>
                      </li>
                      <li className='flex mb-4 items-center'>
                        <img
                          src='saturn-assets/images/pricing/green-check.svg'
                          alt=''
                        />
                        <span className='ml-2 text-white'>
                          Advanced Statistic
                        </span>
                      </li>
                      <li className='flex mb-4 items-center'>
                        <img
                          src='saturn-assets/images/pricing/green-check.svg'
                          alt=''
                        />
                        <span className='ml-2 text-white'>Profile Badge</span>
                      </li>
                      <li className='flex mb-4 items-center'>
                        <img
                          src='saturn-assets/images/pricing/green-check.svg'
                          alt=''
                        />
                        <span className='ml-2 text-white'>
                          Access to the community
                        </span>
                      </li>
                      <li className='flex mb-4 items-center'>
                        <img
                          src='saturn-assets/images/pricing/check-circle-grey.svg'
                          alt=''
                        />
                        <span className='ml-2 text-gray-500 line-through'>
                          History of all Liked Photos
                        </span>
                      </li>
                      <li className='flex items-center'>
                        <img
                          src='saturn-assets/images/pricing/green-check.svg'
                          alt=''
                        />
                        <span className='ml-2 text-white'>
                          Directory Listing
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='w-full lg:w-1/3 px-4'>
                  <div className='max-w-sm lg:max-w-none mx-auto pt-10 px-10 pb-8 bg-white border border-gray-100 rounded-3xl'>
                    <div className='text-center mb-6'>
                      <h5 className='text-2xl font-semibold text-gray-900 mb-3'>
                        Executive
                      </h5>
                      <span className='block text-5xl font-bold text-gray-900 mb-3'>
                        $100
                      </span>
                      <span className='block text-gray-500 font-medium mb-6'>
                        per user, per month
                      </span>
                      <a
                        className='inline-block w-full py-4 px-6 text-center text-orange-900 border border-gray-200 hover:border-orange-900 font-semibold rounded-full transition duration-200'
                        href='#'
                      >
                        Start 7-days Trial
                      </a>
                    </div>
                    <ul>
                      <li className='flex mb-4 items-center'>
                        <img
                          src='saturn-assets/images/pricing/green-check.svg'
                          alt=''
                        />
                        <span className='ml-2 text-gray-900 font-medium'>
                          Unlimited Upload
                        </span>
                      </li>
                      <li className='flex mb-4 items-center'>
                        <img
                          src='saturn-assets/images/pricing/green-check.svg'
                          alt=''
                        />
                        <span className='ml-2 text-gray-900 font-medium'>
                          Advanced Statistic
                        </span>
                      </li>
                      <li className='flex mb-4 items-center'>
                        <img
                          src='saturn-assets/images/pricing/green-check.svg'
                          alt=''
                        />
                        <span className='ml-2 text-gray-900 font-medium'>
                          Profile Badge
                        </span>
                      </li>
                      <li className='flex mb-4 items-center'>
                        <img
                          src='saturn-assets/images/pricing/green-check.svg'
                          alt=''
                        />
                        <span className='ml-2 text-gray-900 font-medium'>
                          Access to the community
                        </span>
                      </li>
                      <li className='flex mb-4 items-center'>
                        <img
                          src='saturn-assets/images/pricing/green-check.svg'
                          alt=''
                        />
                        <span className='ml-2 text-gray-900 font-medium'>
                          History of all Liked Photos
                        </span>
                      </li>
                      <li className='flex items-center'>
                        <img
                          src='saturn-assets/images/pricing/green-check.svg'
                          alt=''
                        />
                        <span className='ml-2 text-gray-900 font-medium'>
                          Directory Listing
                        </span>
                      </li>
                    </ul>
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

