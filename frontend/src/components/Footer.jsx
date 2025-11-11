import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-(--neural-dark) text-white py-6 mt-auto">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm text-gray-400">
                            © {new Date().getFullYear()} InnerCircle. All rights reserved.
                        </p>
                    </div>
                    
                    <div className="flex gap-6">
                        <Link 
                            to="/privacy" 
                            className="text-sm text-gray-300 hover:text-white transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link 
                            to="/terms" 
                            className="text-sm text-gray-300 hover:text-white transition-colors"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}