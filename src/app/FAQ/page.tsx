import Navbar from "../components/Navbar/Navbar";

const FAQ = () => {
    return (
        <div className="bg-black text-white shadow-md">
            <Navbar />
            <section className="p-4 bg-slate-600 text-white shadow-md">
                <h2 className="text-2xl text-center font-bold">ShadCN UI and Redux FAQ</h2>
                <br />
                <div className="mt-4">
                    <h3 className="font-semibold">Q: What is ShadCN UI?</h3>
                    <p>A: ShadCN UI is a React component library built for modern web applications, utilizing Tailwind CSS for utility-first styling and providing accessible, customizable UI components.</p>
                </div>

                <div className="mt-4">
                    <h3 className="font-semibold">Q: Why should I use ShadCN UI?</h3>
                    <p>A: ShadCN UI simplifies UI development with pre-built, responsive components that integrate with Tailwind CSS, reducing the time needed for styling and ensuring consistency across your app.</p>
                </div>

                <div className="mt-4">
                    <h3 className="font-semibold">Q: Is ShadCN UI compatible with Tailwind CSS?</h3>
                    <p>A: Yes, ShadCN UI is designed to work seamlessly with Tailwind CSS, making it easy to style components using Tailwind utility-first approach.</p>
                </div>

                <div className="mt-4">
                    <h3 className="font-semibold">Q: How do I customize ShadCN UI components?</h3>
                    <p>A: You can customize components by applying additional Tailwind CSS classes or overriding default styles via props, ensuring flexibility for different design needs.</p>
                </div>

                <div className="mt-4">
                    <h3 className="font-semibold">Q: Does ShadCN UI support dark mode?</h3>
                    <p>A: Yes, ShadCN UI components can easily support dark mode through Tailwind built-in dark mode classes or custom theme configurations.</p>
                </div>

                <div className="mt-4">
                    <h3 className="font-semibold">Q: Is ShadCN UI accessible?</h3>
                    <p>A: Accessibility is a core focus of ShadCN UI. The components are designed with accessibility in mind, ensuring they meet web accessibility standards like WCAG.</p>
                </div>

                <div className="mt-4">
                    <h3 className="font-semibold">Q: Can I use ShadCN UI with Next.js or other frameworks?</h3>
                    <p>A: Absolutely! ShadCN UI works well with Next.js, Create React App, or any React-based framework, making it versatile for various projects.</p>
                </div>

                <div className="mt-4">
                    <h3 className="font-semibold">Q: How can I ensure my ShadCN UI components are performant?</h3>
                    <p>A: ShadCN UI components are built with performance in mind. You can enhance performance by using React best practices like memoization (React.memo) and avoiding unnecessary re-renders. Tailwind CSS’s utility classes also help minimize the CSS footprint.</p>
                </div>

                {/* Redux FAQs */}
                <div className="mt-4">
                    <h3 className="font-semibold">Q: What is Redux?</h3>
                    <p>A: Redux is a predictable state container for JavaScript apps, primarily used with React for managing the state of the application in a single, centralized store.</p>
                </div>

                <div className="mt-4">
                    <h3 className="font-semibold">Q: Why should I use Redux?</h3>
                    <p>A: Redux provides a clear structure for managing state, making it easier to maintain and debug applications, especially as they grow in complexity.</p>
                </div>

                <div className="mt-4">
                    <h3 className="font-semibold">Q: How do I set up Redux in my React application?</h3>
                    <p>A: You can set up Redux by installing the Redux and React-Redux libraries, creating a store, defining actions and reducers, and wrapping your application with the <code className="bg-gray-700 p-1">Provider</code> component.</p>
                </div>

                <div className="mt-4">
                    <h3 className="font-semibold">Q: Can I use Redux with React Hooks?</h3>
                    <p>A: Yes, Redux can be used with React Hooks. The React-Redux library provides the <code className="bg-gray-700 p-1">useSelector</code> and <code className="bg-gray-700 p-1">useDispatch</code> hooks for accessing the state and dispatching actions.</p>
                </div>

                <div className="mt-4">
                    <h3 className="font-semibold">Q: What is the difference between Redux and Context API?</h3>
                    <p>A: While both Redux and Context API are used for state management, Redux is more powerful for larger applications due to its middleware support, dev tools, and predictable state updates, while Context API is simpler for smaller applications or for passing props deeply.</p>
                </div>

                <div className="mt-4">
                    <h3 className="font-semibold">Q: How do I handle asynchronous actions in Redux?</h3>
                    <p>A: You can handle asynchronous actions in Redux using middleware like Redux Thunk or Redux Saga, which allows you to manage async logic and side effects effectively.</p>
                </div>

                <div className="mt-4">
                    <h3 className="font-semibold">Q: Is Redux suitable for small applications?</h3>
                    <p>A: While Redux is excellent for managing complex state in larger applications, it can be overkill for small apps. For simpler state management, consider using the Context API or local component state.</p>
                </div>
            </section>
        </div>
    );
};

export default FAQ;
