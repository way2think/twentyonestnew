import { useState } from "react";
import "./Select.css";
import { motion } from "framer-motion";

const Select = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Looking for");

  const handleItemClick = (i) => {
    const item = options[i];
    setIsOpen(!isOpen);
    setSelectedItem(item);
  };

  const { options } = props;
  const itemVariants = {
    open: {
      height: 0,
      transition: { type: "ease", stiffness: 300, damping: 24 },
    },
    closed: { transition: { duration: 0.2 } },
  };
  return (
    <motion.div initial={false} animate={isOpen ? "open" : "closed"}>
      <motion.div
        onClick={() => setIsOpen(!isOpen)}
        className="select_container"
      >
        <span>{selectedItem}</span>
        <div>
          <svg fill="#fff" width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </div>
      </motion.div>
      <div className="dropdown">
        <div
          className={`${
            isOpen ? `dropdown-open dropdown-container` : "dropdown-container"
          }`}
        >
          {options.map((item, i) => (
            <div
              className="option"
              variants={itemVariants}
              onClick={() => handleItemClick(i)}
            >
              <div className="item">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Select;
