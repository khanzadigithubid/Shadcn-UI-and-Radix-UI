import Image from 'next/image';
import img1 from '../public/images.png';
import img2 from '../public/radix.png';
import Navbar from '../components/Navbar/Navbar';

export default function LearnMore() {
    return (
        <div className='bg-black text-white shadow-md'>
            <Navbar />
        <section className='bg-slate-600 text-black body-font'>
            <div className='container mx-auto flex flex-col items-center px-5 py-10 md:py-20'>
                <div className='relative mb-10 w-full max-w-3xl'>
                    <Image
                        className='rounded-[50px] border-4 border-white object-cover object-center'
                        alt='hero'
                        src={img1}
                        layout='responsive'
                        width={300}
                        height={300}
                    />
                </div>

                <div className='text-center lg:w-2/3 w-full'>
                    <div className='p-4'>
                        <h1 className='text-3xl md:text-4xl font-bold mb-4'>Exploring Shadcn UI</h1>
                    </div>

                    <h2 className='text-2xl md:text-3xl font-semibold mb-6'>What is ShadCN UI?</h2>
                    <p className='text-lg leading-relaxed mb-4'>
                        ShadCN UI is a utility-first component framework designed specifically for React, focusing on modular, reusable components. 
                        It empowers developers to create stunning user interfaces with minimal effort by leveraging the power of Tailwind CSS, 
                        a popular utility-first CSS framework.
                    </p>
                    <p className='text-lg leading-relaxed mb-4'>
                        One of the core benefits of using ShadCN UI is its emphasis on customization. Unlike traditional component libraries 
                        that come with pre-styled components, ShadCN UI allows you to tailor each component to fit your design requirements perfectly. 
                        This flexibility is particularly useful for projects that demand a unique brand identity or specific design aesthetics.
                    </p>
                    <p className='text-lg leading-relaxed mb-4'>
                        With a modular architecture, you can include only the components you need, preventing unnecessary bloat in your application. 
                        This results in a more performant application, with faster load times and improved user experience.
                    </p>
                    <p className='text-lg leading-relaxed mb-4'>
                        ShadCN UI is also built with performance in mind, ensuring that your applications remain lightweight while providing 
                        advanced UI capabilities. Whether you are building a complex dashboard or a simple landing page, ShadCN UI provides 
                        the tools you need to deliver an exceptional user experience.
                    </p>

                    <h2 className='text-2xl md:text-3xl font-semibold mb-6'>Importance of ShadCN UI</h2>
                    <p className='text-lg leading-relaxed mb-4'>
                        Integrating ShadCN UI into your development process can significantly enhance your workflow and the quality of your applications. 
                        Here are some key reasons why it stands out:
                    </p>
                    <ul className='list-disc list-inside mb-4'>
                        <li className='mb-2'>
                            <strong>Time Efficiency:</strong> The utility-first approach of ShadCN UI allows developers to quickly prototype and build user interfaces without the need to write extensive custom CSS.
                        </li>
                        <li className='mb-2'>
                            <strong>Customizability:</strong> The framework design encourages customization, enabling you to create a unique look and feel that aligns with your brand without compromising on performance.
                        </li>
                        <li className='mb-2'>
                            <strong>Responsive Design:</strong> ShadCN UI is built with mobile-first principles, ensuring your applications look great on all devices, from smartphones to desktops.
                        </li>
                        <li className='mb-2'>
                            <strong>Community and Support:</strong> As an evolving library, ShadCN UI benefits from a growing community, providing ample resources, examples, and support for developers.
                        </li>
                        <li>
                            <strong>Improved Collaboration:</strong> With clear conventions and a modular approach, ShadCN UI makes it easier for teams to collaborate on projects, ensuring a consistent design language across different components.
                        </li>
                    </ul>

                    <h2 className='text-2xl md:text-3xl font-semibold mb-6'>Installation Instructions</h2>
                    <p className='text-lg leading-relaxed mb-4'>
                        To get started with ShadCN UI, follow the installation steps outlined below. This guide provides commands for both 
                        npm and yarn package managers.
                    </p>
                    <p className='text-lg leading-relaxed mb-4'>
                        First, ensure that you have Node.js and npm or yarn installed on your machine. You can download them from the 
                        official Node.js website.
                    </p>
                    <p className='text-lg leading-relaxed mb-4'>
                        To install ShadCN UI via npm, run the following command in your project directory:
                    </p>
                    <pre className='bg-gray-800 text-white p-4 rounded mb-4'>
                        <code>
                            npm install shadcn-ui
                        </code>
                    </pre>
                    <p className='text-lg leading-relaxed mb-4'>
                        If you prefer using yarn, you can use this command instead:
                    </p>
                    <pre className='bg-gray-800 text-white p-4 rounded mb-4'>
                        <code>
                            yarn add shadcn-ui
                        </code>
                    </pre>
                    <p className='text-lg leading-relaxed mb-4'>
                        After installation, you can start importing ShadCN UI components into your React components. For example:
                    </p>

                    <div className='container mx-auto flex flex-col items-center px-5 py-10 md:py-20'>
                <div className='relative mb-10 w-full max-w-3xl'>
                    <Image
                        className='rounded-[50px] border-4 border-white object-cover object-center'
                        alt='hero'
                        src={img2}
                        layout='responsive'
                        width={300}
                        height={300}
                    />
                </div>

                    
                    <div className='p-4'>
                        <h1 className='text-3xl md:text-4xl font-bold mb-4'>Exploring Radix UI</h1>
                    </div>

                    <h2 className='text-2xl md:text-3xl font-semibold mb-6'>Radix UI</h2>
                    <p className='text-lg leading-relaxed mb-4'></p>
Radix UI is a highly customizable and accessible component library built specifically for React applications. It provides 'primitives' — essential, unstyled components like popovers, dialogs, sliders, and tooltips. These unstyled components are designed to integrate seamlessly with a variety of styling approaches, including CSS, Tailwind CSS, and CSS-in-JS, allowing developers full control over design without needing to override default styles.

   <h2 className='text-2xl md:text-3xl font-semibold mb-6'>Accessibility Focus</h2>
   <p className='text-lg leading-relaxed mb-4'></p>
One of Radix UI core strengths is its emphasis on accessibility. The library is built following WCAG and WAI-ARIA standards, making it an excellent choice for developers who prioritize inclusive user experiences. This commitment to accessibility ensures that Radix components can be used by a wide range of users, including those who rely on assistive technologies.

<h2 className='text-2xl md:text-3xl font-semibold mb-6'>Support for Server-Side Rendering</h2>
<p className='text-lg leading-relaxed mb-4'></p>
Radix UI also supports server-side rendering (SSR), which is particularly beneficial for applications built with frameworks like Next.js. SSR capabilities can enhance performance by improving load times and providing faster initial page loads, which ultimately contributes to a better user experience.

<h2 className='text-2xl md:text-3xl font-semibold mb-6'>ndustry Adoption </h2>
<p className='text-lg leading-relaxed mb-4'></p>
Radix UI is trusted by well-known companies, such as Vercel and Codesandbox, to deliver consistent and accessible user interfaces. Its modular and flexible design makes it a strong choice for organizations focused on creating high-quality, accessible web applications.

 <h2 className='text-2xl md:text-3xl font-semibold mb-6'>Design Flexibility </h2>
 <p className='text-lg leading-relaxed mb-4'></p>
To streamline development, Radix offers themes, icons, and a versatile color palette, though it doesn’t dictate design choices. This flexibility allows developers to implement Radix components without altering the visual identity of the project.

 <h2 className='text-2xl md:text-3xl font-semibold mb-6'>Comparisons and Limitations</h2>
 <p className='text-lg leading-relaxed mb-4'></p>
While Radix UI provides an accessible and flexible component library, it may not be as extensive as larger libraries like MUI or Ant Design, offering fewer components overall. However, its focus on accessibility and customizability makes it ideal for building tailored, high-quality interfaces that maintain a unique brand identity.
                    

                    <h2 className='text-2xl md:text-3xl font-semibold mb-6'>ShadCN UI vs. Redux</h2>
                    <p className='text-lg leading-relaxed mb-4'>
                        While both ShadCN UI and Redux are valuable tools in the React ecosystem, they serve different purposes and are designed for different aspects of application development.
                    </p>
                    <ul className='list-disc list-inside mb-4'>
                        <li className='mb-2'>
                            <strong>Purpose:</strong> 
                            <ul className='list-disc list-inside pl-4'>
                                <li><strong>ShadCN UI:</strong> A UI component framework that provides reusable and customizable components to build user interfaces effectively.</li>
                                <li><strong>Redux:</strong> A state management library that helps manage application state across components, allowing for predictable state updates and easier debugging.</li>
                            </ul>
                        </li>
                        <li className='mb-2'>
                            <strong>Usage Context:</strong> 
                            <ul className='list-disc list-inside pl-4'>
                                <li><strong>ShadCN UI:</strong> Ideal for designing UI components and layouts that are visually appealing and responsive.</li>
                                <li><strong>Redux:</strong> Best suited for managing complex application state, especially in larger applications with many components that need to share state.</li>
                            </ul>
                        </li>
                        <li className='mb-2'>
                            <strong>Integration:</strong> 
                            <ul className='list-disc list-inside pl-4'>
                                <li><strong>ShadCN UI:</strong> Can be easily integrated into any React project to enhance the UI without dictating how state should be managed.</li>
                                <li><strong>Redux:</strong> Typically requires more setup and is used in conjunction with UI libraries or frameworks to manage how data flows through the application.</li>
                            </ul>
                        </li>
                        <li className='mb-2'>
                            <strong>Learning Curve:</strong> 
                            <ul className='list-disc list-inside pl-4'>
                                <li><strong>ShadCN UI:</strong> Easier to adopt for developers familiar with Tailwind CSS and utility-first design.</li>
                                <li><strong>Redux:</strong> Has a steeper learning curve due to its concepts of actions, reducers, and middleware, but offers powerful tools for state management.</li>
                            </ul>
                        </li>
                    </ul>

                </div>
                </div>
                </div>
            
        </section>
        </div>
    );
}
