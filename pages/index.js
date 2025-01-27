import TypingEffect from "../components/TypingEffect";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="flex items-center justify-center min-h-screen bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div>
        <h1 className="text-4xl font-bold text-primary">
          Welcome to <TypingEffect />
        </h1>
      </div>
      {/* <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <TypingEffect />
      </div> */}
    </motion.div>
  );
}
