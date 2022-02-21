import React, { useState } from "react";
import { FaChevronCircleDown,FaChevronCircleUp } from "react-icons/fa";
const QuestionsData = [
  {
    question: "How does cryptocurrency pricing work?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis ornare molestie scelerisque odio auctor tincidunt. Est vel ullamcorper ut augue tortor a nisl. Mauris amet mauris interdum morbi dui elit. Quis facilisi at sed eget tortor varius facilisi. Vulputate neque eu cras a. Ullamcorper mauris purus pulvinar gravida sem cursus augue. Egestas magna urna, quisque bibendum penatibus nunc. In morbi arcu mauris feugiat consectetur. Scelerisque tristique orci rutrum lectus duis sit at id. Purus nulla tincidunt. ",
  },
  {
    question: "How is my crypto account protected?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis ornare molestie scelerisque odio auctor tincidunt. Est vel ullamcorper ut augue tortor a nisl. Mauris amet mauris interdum morbi dui elit. Quis facilisi at sed eget tortor varius facilisi. Vulputate neque eu cras a. Ullamcorper mauris purus pulvinar gravida sem cursus augue. Egestas magna urna, quisque bibendum penatibus nunc. In morbi arcu mauris feugiat consectetur. Scelerisque tristique orci rutrum lectus duis sit at id. Purus nulla tincidunt. ",
  },
  {
    question: "Can I test the platform before charging?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis ornare molestie scelerisque odio auctor tincidunt. Est vel ullamcorper ut augue tortor a nisl. Mauris amet mauris interdum morbi dui elit. Quis facilisi at sed eget tortor varius facilisi. Vulputate neque eu cras a. Ullamcorper mauris purus pulvinar gravida sem cursus augue. Egestas magna urna, quisque bibendum penatibus nunc. In morbi arcu mauris feugiat consectetur. Scelerisque tristique orci rutrum lectus duis sit at id. Purus nulla tincidunt. ",
  },
  {
    question: "What kind of API does this platform provide?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis ornare molestie scelerisque odio auctor tincidunt. Est vel ullamcorper ut augue tortor a nisl. Mauris amet mauris interdum morbi dui elit. Quis facilisi at sed eget tortor varius facilisi. Vulputate neque eu cras a. Ullamcorper mauris purus pulvinar gravida sem cursus augue. Egestas magna urna, quisque bibendum penatibus nunc. In morbi arcu mauris feugiat consectetur. Scelerisque tristique orci rutrum lectus duis sit at id. Purus nulla tincidunt. ",
  },
  {
    question: "I can't find a library for C #, Go, etc. What should I do?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis ornare molestie scelerisque odio auctor tincidunt. Est vel ullamcorper ut augue tortor a nisl. Mauris amet mauris interdum morbi dui elit. Quis facilisi at sed eget tortor varius facilisi. Vulputate neque eu cras a. Ullamcorper mauris purus pulvinar gravida sem cursus augue. Egestas magna urna, quisque bibendum penatibus nunc. In morbi arcu mauris feugiat consectetur. Scelerisque tristique orci rutrum lectus duis sit at id. Purus nulla tincidunt. ",
  },
];

const Questions = () => {
    const [active, setActive] = useState(false);
  return (
    <div className="container d-flex justify-content-center align-items-center flex-column">
      {QuestionsData.map((item, index) => (
        <Details key={index} index={index} question={item.question} answer={item.answer} active={active}  setActive={setActive} />
      ))}
    </div>
  );
};

export default Questions;

const Details = ({ index, question, answer,setActive,active }) => {
    const handleClick = () => {
        setActive( index === active ? false : index);
    }
    // console.log({index});
    // console.log({active});
  return (
    <div className="py-1 w-75">
      <div className="px-5 d-flex justify-content-between align-items-center rounded  bg-pink ">
        <p className="text-white pt-3">{question}</p>
        <button
        onClick={handleClick}
        className="btn">
            {
                active ?<FaChevronCircleDown color="#fff" /> : <FaChevronCircleUp color="#fff" />
            }
        
        </button>
      </div>
    </div>
  );
};
