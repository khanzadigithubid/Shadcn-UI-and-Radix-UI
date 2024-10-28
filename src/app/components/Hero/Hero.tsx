import Link from "next/link";
import Image from "next/image";
import img from "../../public/images.png";

export default function Hero() {
    return (
        <section className="bg-slate-600 text-white body-font">
            <div className="container mx-auto flex flex-col items-center px-5 py-10 md:py-20">
                <div className="relative mb-10 w-full max-w-3xl">
                    <Image
                        className="rounded-[50px] border-4 border-white object-cover object-center"
                        alt="hero"
                        src={img}
                        layout="responsive"
                        width={300} 
                        height={300} 
                    />
                </div>
                <div className="text-center lg:w-2/3 w-full">
                    <div className="p-4">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">Exploring Shadcn UI</h1>
                        <p className="text-lg md:text-2xl mb-6">
                        ShadCN UI is a modern component library created by Shadcn, officially released on November 1, 2023. It is designed for building user interfaces in React applications, leveraging the utility-first styling approach of Tailwind CSS. The library provides a range of customizable, reusable components that help developers streamline their UI development process while ensuring responsiveness and accessibility. By focusing on modern design principles and community feedback, ShadCN UI aims to enhance the efficiency and aesthetics of web applications, making it a valuable tool for developers looking to create visually appealing interfaces quickly.
                        </p>
                    </div>

                    <div className="p-4">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">Here are the key points highlighting the importance of ShadCN UI</h1>
                        <ul className="text-lg md:text-2xl mb-6 list-disc list-inside">
                            <li>Reusable Components</li>
                            <li>Tailwind CSS Integration</li>
                            <li>Customizability</li>
                            <li>Accessibility</li>
                            <li>Responsive Design</li>
                            <li>Community-Driven</li>
                            <li>Enhanced Development Speed</li>
                        </ul>
                    </div>
                </div>
        <div className="flex justify-center">
        <Link href="/learn-more">
          <span className="bg-slate-900 text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300 cursor-pointer">
            Learn More
          </span>
        </Link>
        </div>
            </div>
        </section>
    );
}