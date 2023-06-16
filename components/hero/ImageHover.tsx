import { motion } from "framer-motion";

const ImageHover = ({ src, alt }) => {
  return (
    <div className="relative w-64 h-64">
      <div className="absolute inset-0 flex justify-center items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-full h-full bg-black bg-opacity-50 absolute opacity-0 transition-opacity rounded-md"
        />
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default ImageHover;
